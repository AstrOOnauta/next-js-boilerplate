/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],

  /*
  If you prefer to use the new next13 APP folder structure, uncomment the line below
  and read the NextJS (https://nextjs.org/blog/next-13#new-app-directory-beta)
  and ChakraUI (https://chakra-ui.com/getting-started/nextjs-guide#app-directory-setup)
  documentation for correct adaptation.
  */
  // experimental: { appDir: true },
};

module.exports = nextConfig;
