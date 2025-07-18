import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    // Get the pathname from the request
    const path = request.nextUrl.pathname;

    // Check if user is authenticated by looking for user in localStorage
    // Note: In middleware, we need to check cookies instead of localStorage
    // since localStorage is not available in middleware context
    const userToken = request.cookies.get("user-token")?.value;
    const isAuthenticated = !!userToken;

    // Define public routes that don't require authentication
    const publicRoutes = ["/auth"];
    const isPublicRoute = publicRoutes.some((route) => path.startsWith(route));

    // If user is not authenticated and trying to access protected route
    if (!isAuthenticated && !isPublicRoute) {
        // Redirect to auth page
        return NextResponse.redirect(new URL("/auth", request.url));
    }

    // If user is authenticated and trying to access auth page
    if (isAuthenticated && isPublicRoute) {
        // Redirect to dashboard
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Allow the request to continue
    return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (public folder)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
    ],
};
