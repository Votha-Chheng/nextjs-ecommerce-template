/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    
  },
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      }
    ]
  }
}

module.exports = nextConfig

