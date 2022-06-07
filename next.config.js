/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.w3.org','www.gstatic.com','firebasestorage.googleapis.com'],
  },
};

module.exports = nextConfig;
