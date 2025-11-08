/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // Only use basePath in production (for GitHub Pages)
  basePath: isProd ? '/rudra-enterprises' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

