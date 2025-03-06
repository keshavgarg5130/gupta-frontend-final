import {MetadataRoute} from "next";

export default function robots():MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ["/register", "/login", "/profile", "Orders", "/checkout", "/cart", "/checkout/success", "/checkout/canceled", "/checkout/webhook", "/checkout/webhook-completed"],

        },
        sitemap: 'https://guptaswitchgears.com/sitemap.xml',
    };

}