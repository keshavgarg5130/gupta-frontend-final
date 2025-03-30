import { NextResponse } from "next/server";

export function middleware(req) {
    const res = NextResponse.next();

    // Set X-Robots-Tag header to allow indexing
    res.headers.set("X-Robots-Tag", "index, follow");

    // Example: Redirect users if they visit "/csr"
    if (req.nextUrl.pathname === "/csr") {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return res;
}

export const config = {
    matcher: [
        // Match all routes except Next.js internals and static files
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
