/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dimg.donga.com', 'cdn.pixabay.com', 'pds.joongang.co.kr'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
