import "./globals.scss";
import "tailwind-normalize/normalize.css";
import { IranYekanXFont } from "@/constants/font";
import ThemeSwitch from "@/ui/theme-switch";
import { Toaster } from "react-hot-toast";
import QueryProvider from "@/components/providers/query-provider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa-IR" dir="rtl">
            <body className={IranYekanXFont.className}>
                <QueryProvider>{children}</QueryProvider>
                <Toaster position="bottom-center" />
            </body>
        </html>
    );
}
