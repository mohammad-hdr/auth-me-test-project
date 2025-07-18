"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/hooks/use-auth";

interface AuthGuardProps {
    children: React.ReactNode;
    requireAuth?: boolean;
    redirectTo?: string;
}

export default function AuthGuard({ children, requireAuth = true, redirectTo = "/auth" }: AuthGuardProps) {
    const router = useRouter();

    useEffect(() => {
        const checkAuth = () => {
            const authenticated = isAuthenticated();

            if (requireAuth && !authenticated) {
                // User needs to be authenticated but isn't
                router.push(redirectTo);
            } else if (!requireAuth && authenticated) {
                // User is authenticated but shouldn't be (e.g., on auth page)
                router.push("/dashboard");
            }
        };

        checkAuth();
    }, [requireAuth, redirectTo, router]);

    return <>{children}</>;
}
