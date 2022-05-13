/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org"],
    formats: ["image/webp"]
  }
}

module.exports = nextConfig
