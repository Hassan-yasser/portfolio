import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // لتعطيل ESLint أثناء عملية البناء
  },
};

export default nextConfig;
