import "./globals.scss";

export default function HomePage() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100dvh",
                color: "var(--color-primary)",
                backgroundColor: "var(--color-background)",
            }}
        >
            TODO: Could Be a Landing Page{" "}
            <a href="/auth" style={{ color: "var(--color-primary-1000)", textDecoration: "underline" }}>
                Go To Login Page
            </a>
        </div>
    );
}
