import {MetadataRoute} from "next";


export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://guptaswitchgears.com/sitemap.xml',
        // Optional but recommended for some crawlers
        host: 'https://guptaswitchgears.com'
    };
}