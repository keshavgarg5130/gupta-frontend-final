import { MetadataRoute } from "next";
import fetchProductSlug from "@/app/lib/fetchProductSlug";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://guptaswitchgears.com";
    const baseUrl2 = "https://www.guptaswitchgears.com";


    const productSlugs = await fetchProductSlug();

    const productUrls = productSlugs.map((productSlug: { slug: string }) => ({
        url: `${baseUrl}/product/${productSlug.slug}`,
        lastModified: new Date().toISOString(),
    }));
    const productUrls2 = productSlugs.map((productSlug: { slug: string }) => ({
        url: `${baseUrl2}/product/${productSlug.slug}`,
        lastModified: new Date().toISOString(),
    }))

    const staticUrls = [
        // Static Pages
        { url: baseUrl, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/about-us`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/privacy-policy`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/terms-conditions`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/contact-us`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/return-refund-policy`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/panel/distribution-board`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/acb`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/mcb`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/mccb`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/rccb`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/isolator`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/overload-relay`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/power-contractor`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/wires-and-cables`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/panel/apfc`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/panel/automatic-street-lighting-switching`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/panel/busduct-rising`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/panel/dg-synchronization`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/panel/load-sharing`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/panel/out-door-feeder`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/panel/plc-scada`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/panel/plc-soft-starter-vfd`, lastModified: new Date().toISOString() },
        { url: baseUrl2, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/about-us`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/contact-us`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/privacy-policy`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/terms-conditions`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/return-refund-policy`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/panel/distribution-board`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/acb`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/mcb`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/mccb`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/rccb`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/isolator`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/overload-relay`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/power-contractor`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/wires-and-cables`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/panel/apfc`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/panel/automatic-street-lighting-switching`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/panel/busduct-rising`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/panel/dg-synchronization`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/panel/load-sharing`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/panel/out-door-feeder`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/panel/plc-scada`, lastModified: new Date().toISOString() },
        { url: `${baseUrl2}/panel/plc-soft-starter-vfd`, lastModified: new Date().toISOString() },

    ];

    return [...staticUrls, ...productUrls, ...productUrls2];
}
