import type { NextConfig } from "next";

// On GitHub Pages project sites the app is served under /<repo>/.
// Set NEXT_PUBLIC_BASE_PATH in the deploy env; leave empty for local/dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
