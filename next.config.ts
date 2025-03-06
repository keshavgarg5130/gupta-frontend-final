import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/(.*).(png|jpg|jpeg|webp|svg|gif)", // Match image files
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache for 1 year
          },
          {
            key: "Expires",
            value: new Date(Date.now() + 31536000000).toUTCString(), // 1 year from now
          },
        ],
      },
    ];
  },
  images: {
    domains: ['res.cloudinary.com'], // Add the domain here
  },
};
export default nextConfig;
