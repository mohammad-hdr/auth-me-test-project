export function getUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
}

export function isAuthenticated(): boolean {
    return !!localStorage.getItem("user");
}

export function login(userData: { token: string; firstName: string; lastName: string; phoneNumber: string; picture: string }) {
    localStorage.setItem("user", JSON.stringify(userData));
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    document.cookie = `user-token=${userData.token}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`;
}

export function logout() {
    localStorage.removeItem("user");
    document.cookie = "user-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
