"use client";
import "./../../styles.dashboard.scss";
import { getUser } from "@/hooks/use-auth";
import AuthGuard from "@/components/auth-guard";

export default function ProfilePage() {
    const user = getUser();
    return (
        <AuthGuard requireAuth={true} redirectTo="/auth">
            <div className="profile-page">
                <div className="profile-info">
                    <div className="profile-info-item">
                        <span className="profile-info-item-label">نام</span>
                        <span className="profile-info-item-value">{user?.firstName}</span>
                    </div>
                    <div className="profile-info-item">
                        <span className="profile-info-item-label">نام خانوادگی</span>
                        <span className="profile-info-item-value">{user?.lastName}</span>
                    </div>
                    <div className="profile-info-item">
                        <span className="profile-info-item-label">تلفن</span>
                        <span className="profile-info-item-value">{user?.phoneNumber}</span>
                    </div>
                </div>
            </div>
        </AuthGuard>
    );
}
