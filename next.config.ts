import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Pin the workspace root to this project dir. Without it, Turbopack/Next
  // walks up and finds a package-lock.json in the user's home dir (installed by
  // the typesafe-ai skill), mis-inferring home as the root and emitting a
  // "multiple lockfiles / inferred workspace root" warning.
  turbopack: {
    root: process.cwd(),
  },
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
