"use client";
//! Required
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import classNames from "classnames";
import SidebarItems, { type SidebarItem } from "@/constants/navigation-items";
import { getUser, logout } from "@/hooks/use-auth";

//! Components
import Link from "next/link";
import { ChevronsRight, EllipsisVertical, LogOut } from "lucide-react";

//! Styles
import "./styles.dashboard-sidebar.scss";

export default function DashboardSidebar() {
    const user = getUser();
    const { push } = useRouter();
    const pathname = usePathname();

    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => (
        <div className="sidebar-content">
            {/* Logo */}
            <div className={classNames("logo-section", isCollapsed && !isMobile ? "collapsed" : "expanded", isMobile && "mobile")}>
                {(!isCollapsed || isMobile) && <h6 className="logo">دکاموند</h6>}
                <ChevronsRight
                    role="button"
                    size={24}
                    className={classNames("collapse-button", isCollapsed && "collapsed")}
                    onClick={() => {
                        setIsMobileOpen(!isMobileOpen);
                        setIsCollapsed(!isCollapsed);
                    }}
                />
            </div>

            {/* Navigation Items */}
            <nav>
                <ul>
                    {SidebarItems.map((item: SidebarItem) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.href}>
                                <Link href={item.href} className={classNames("nav-item", isActive && "active", isCollapsed && !isMobile && "collapsed")}>
                                    <span className="nav-icon">{item.icon}</span>
                                    {(!isCollapsed || isMobile) && <span className="nav-label">{item.label}</span>}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* User Profile Section */}
            <div className={classNames("user-profile", isCollapsed && !isMobile && "collapsed")}>
                <figure className="profile-image-container">
                    <Image src={user?.picture || "/images/default-profile.png"} alt="User Profile" fill className="profile-image" />
                </figure>
                {(!isCollapsed || isMobile) && (
                    <div className="profile-info">
                        <h3 className="profile-name">
                            {user?.firstName} {user?.lastName}
                        </h3>
                        <button
                            className="profile-logout"
                            onClick={() => {
                                logout();
                                push("/auth");
                            }}
                        >
                            <LogOut size={24} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile Toggle Button */}
            <header className="mobile-toggle-header">
                <h6 className="logo">دکاموند</h6>
                <button className="toggle-open" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                    <LogOut
                        size={24}
                        onClick={() => {
                            logout();
                            push("/auth");
                        }}
                    />
                </button>
            </header>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileOpen(false)}
                        className="mobile-overlay"
                    />
                )}
            </AnimatePresence>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="mobile-sidebar"
                    >
                        <SidebarContent isMobile={true} />
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <aside className={classNames("desktop-sidebar", isCollapsed ? "collapsed" : "expanded")}>
                <SidebarContent />
            </aside>
        </>
    );
}
