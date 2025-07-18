"use client";

import { getUser } from "@/hooks/use-auth";
import "./../styles.dashboard.scss";

export default function DashboardPage() {
    const user = getUser();
    return (
        <header className="dashboard-header">
            <h2 className="header-title">
                <span>{user?.firstName}</span> عزیز، خوش آمدید!
            </h2>
        </header>
    );
}
