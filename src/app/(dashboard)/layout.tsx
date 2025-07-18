import "@/app/globals.scss";
import "./styles.dashboard.scss";
import DashboardSidebar from "./_components/dashboard-sidebar";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="dashboard-page">
            {/* Sidebar */}
            <DashboardSidebar />

            {/* Main Content Area */}
            <div className="main-container">
                <main>{children}</main>
            </div>
        </div>
    );
}
