/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  // modularizeImports: {
  //   "@mui/material": {
  //     transform: "@mui/material/{{member}}",
  //   },
  // },
  images: {
    domains: [
      'www.w3.org',
      'www.gstatic.com',
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com'
    ],
  },
});
