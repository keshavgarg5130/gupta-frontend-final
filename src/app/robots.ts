import {MetadataRoute} from "next";


export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/register',
                '/login',
                '/profile',
                '/orders',  // Lowercase to match typical URL patterns
                '/checkout',
                '/cart',
                '/checkout/success',
                '/checkout/canceled',
                '/checkout/webhook',
                '/checkout/webhook-completed'
            ],
        },
        sitemap: 'https://guptaswitchgears.com/sitemap.xml',
        // Optional but recommended for some crawlers
        host: 'https://guptaswitchgears.com'
    };
}