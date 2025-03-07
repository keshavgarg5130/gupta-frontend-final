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
            value: "public, max-age=315360, immutable", // Cache for 1 year
          },
          {
            key: "Expires",
            value: new Date(Date.now() + 315360000).toUTCString(), // 1 year from now
          },
        ],
      },
    ];
  },
  images: {
    formats: ['image/webp'],
    domains:['res.cloudinary.com'],
  },

};
export default nextConfig;
