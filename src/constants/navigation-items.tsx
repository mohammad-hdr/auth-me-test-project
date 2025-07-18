import { Home, User } from "lucide-react";

export type SidebarItem = { href: string; label: string; icon: React.ReactNode };
const SidebarItems: SidebarItem[] = [
    {
        href: "/dashboard",
        label: "داشبورد",
        icon: <Home size={24} />,
    },
    {
        href: "/dashboard/profile",
        label: "پروفایل",
        icon: <User size={24} />,
    },
];

export default SidebarItems;
