import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Resolve the workspace root warning from nested lockfiles
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
