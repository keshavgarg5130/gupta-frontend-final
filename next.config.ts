import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // ✅ Minify JavaScript using SWC

  async headers() {
    return [
      {
        source: "/(.*)\\.(png|jpg|jpeg|webp|svg|gif)$", // ✅ Match image files
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // ✅ Cache for 1 year
          },
          {
            key: "Expires",
            value: new Date(Date.now() + 31536000000).toUTCString(), // ✅ 1 year from now
          },
        ],
      },
    ];
  },

  images: {
    domains: ["res.cloudinary.com"],
    deviceSizes: [320, 420, 768, 1024, 1200], // ✅ Optimize images for different devices
    imageSizes: [16, 32, 48, 64, 96], // ✅ Reduce multiple image requests
    formats: ["image/avif", "image/webp"], // ✅ Use modern formats
  },

  compress: true, // ✅ Enable gzip & Brotli compression

  webpack(config) {
    config.optimization.splitChunks = {
      chunks: "all",
      minSize: 30000,
      maxSize: 200000, // ✅ Reduce JS file sizes
    };
    return config;
  },
};

export default nextConfig;
