import "./../globals.scss";
import "./styles.auth.scss";
import "tailwind-normalize/normalize.css";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
