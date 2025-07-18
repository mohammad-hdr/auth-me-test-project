import "./../globals.scss";
import "./styles.auth.scss";
import "tailwind-normalize/normalize.css";
import { IranYekanXFont } from "@/constants/font";
import ThemeSwitch from "@/ui/theme-switch";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa-IR" dir="rtl">
            <body className={IranYekanXFont.className}>
                <ThemeSwitch />
                {children}
            </body>
        </html>
    );
}
