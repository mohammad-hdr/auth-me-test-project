"use client";

import { getUser } from "@/hooks/use-auth";
import AuthGuard from "@/components/auth-guard";
import "./../styles.dashboard.scss";

export default function DashboardPage() {
    const user = getUser();
    return (
        <AuthGuard requireAuth={true} redirectTo="/auth">
            <header className="dashboard-header">
                <h2 className="header-title">
                    <span>{user?.firstName}</span> عزیز، خوش آمدید!
                </h2>
            </header>
        </AuthGuard>
    );
}
