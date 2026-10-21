import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Exportação estática: gera a pasta /out, compatível com Cloudflare Pages (sem servidor Node).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
};

export default nextConfig;
