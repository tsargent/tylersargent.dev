import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Strict mode for better dev experience
  reactStrictMode: true,

  // Production source maps (disable for smaller builds)
  productionBrowserSourceMaps: false,
};

export default nextConfig;
