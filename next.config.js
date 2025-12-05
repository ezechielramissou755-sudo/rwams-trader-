/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.midjourney.com', 'ui-avatars.com'],
    unoptimized: true,
  },
  output: 'export',
}

module.exports = nextConfig
