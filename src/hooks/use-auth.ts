export function getUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
}

export function isAuthenticated(): boolean {
    return !!localStorage.getItem("user");
}

export function login(userData: { token: string; firstName: string; lastName: string; phoneNumber: string; picture: string }) {
    localStorage.setItem("user", JSON.stringify(userData));
}

export function logout() {
    localStorage.removeItem("user");
}
