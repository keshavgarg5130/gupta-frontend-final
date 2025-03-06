import { MetadataRoute } from "next";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://guptaswitchgears.com";

    let products: { id: string; name: string }[] = [];

    try {
        const response = await fetch(
            "https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/productId_Name",
            { next: { revalidate: 3600 }, cache: "force-cache" }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }

        products = await response.json();
    } catch (error) {
        console.error("Error fetching product data:", error);
    }

    // Function to sanitize product names for XML
    const escapeXml = (unsafe: string) =>
        unsafe.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&apos;");

    return [
        // Static Pages
        { url: baseUrl, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/AboutUs`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/ContactUs`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/Privacy-policy`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/Terms-conditions`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/Return-refund-policy`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/Panel/DistributionBoard`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/ACB`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/MCB`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/MCCB`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/RCCB`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/ISOLATOR`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/OVERLOAD_RELAY`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/POWER_CONTRACTOR`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/WIRES_AND_CABLES`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/Panel/APFC`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/Panel/AutomaticStreetLightingSwitching`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/Panel/BusductRising`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/Panel/DGSynchronization`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/Panel/LoadSharing`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/Panel/OutDoorFeeder`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/Panel/PLC_SCADA`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/Panel/PLC_Soft-StarterVFD`, lastModified: new Date().toISOString() },

        // Dynamic Product Pages
        ...products
            .filter((product) => product.id && product.name) // Ensure both id & name exist
            .map((product) => ({
                url: `${baseUrl}/product/${product.id}-${escapeXml(product.name.toLowerCase().replace(/\s+/g, "-"))}`,
                lastModified: new Date().toISOString(),
            })),
    ];
}
