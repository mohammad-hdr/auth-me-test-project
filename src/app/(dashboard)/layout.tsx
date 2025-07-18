import "@/app/globals.scss";
import "./styles.dashboard.scss";
import { IranYekanXFont } from "@/constants/font";
import DashboardSidebar from "./_components/dashboard-sidebar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fa-IR" dir="rtl">
            <body className={IranYekanXFont.variable}>
                <div className="dashboard-page">
                    {/* Sidebar */}
                    <DashboardSidebar />

                    {/* Main Content Area */}
                    <div className="main-container">
                        <main>{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}
