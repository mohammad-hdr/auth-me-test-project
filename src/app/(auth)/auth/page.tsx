import PhoneForm from "./_components/phone-form";
import AuthGuard from "@/components/auth-guard";

export default function AuthPage() {
    return (
        <AuthGuard requireAuth={false} redirectTo="/dashboard">
            <main className="login-page">
                <PhoneForm />
            </main>
        </AuthGuard>
    );
}
