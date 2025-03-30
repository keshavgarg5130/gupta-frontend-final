export const config = {
    matcher: [
        // Match all routes except Next.js internals and static files
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
module.exports = {
    async headers() {
        return [
            {
                source: "/(.*)", // Apply to all pages
                headers: [
                    {
                        key: "X-Robots-Tag",
                        value: "index, follow", // Allow indexing
                    },
                ],
            },
        ];
    },
};