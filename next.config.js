/** @type {import('next').NextConfig} */
require("dotenv").config();

const isProd = process.env.NODE_ENV === "production";
// console.log("isProd", process.env.NODE_ENV);

const nextConfig = {
  assetPrefix: isProd ? "https://mutaru-tarot.com" : undefined,
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
