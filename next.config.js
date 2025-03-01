/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV !== 'production',
  },
  images: {
    domains: ['media.api-sports.io'],
  }
}

module.exports = withPWA(nextConfig)
