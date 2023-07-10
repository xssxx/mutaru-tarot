/** @type {import('next').NextConfig} */
require("dotenv").config();

const isProd = process.env.NODE_ENV === "production";
// console.log("isProd", process.env.NODE_ENV);

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: isProd ? "/mutaru-tarot" : undefined,
};

module.exports = nextConfig;
