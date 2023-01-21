/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
