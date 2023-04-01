/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/next-album-deploy',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'serkankaragoz.github.io',
        port: '',
        pathname: '/next-album-deploy/forest/**',
      },
    ],
  },
}

module.exports = nextConfig
