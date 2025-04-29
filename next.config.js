const AutoImport = require("unplugin-auto-import/webpack").default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      AutoImport({
        imports: ["react", { "next/navigation": ["useRouter", "usePathname"] }],
        dts: "./auto-imports.d.ts",
      })
    );
    return config;
  },
};

module.exports = nextConfig;
