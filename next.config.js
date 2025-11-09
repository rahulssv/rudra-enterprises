/** @type {import('next').NextConfig} */

// Set the repository name here
const repoName = 'rudra-enterprises';

// Only use basePath in production (for GitHub Pages)
// In development, use empty basePath so localhost:3000 works
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  /**
   * 1. output: 'export'
   * Tells Next.js to build a static site into the 'out' folder.
   * This is required for static hosting like GitHub Pages.
   */
  output: 'export',

  /**
   * 2. basePath
   * This tells the Next.js router that your site's root is /rudra-enterprises.
   * Only set in production for GitHub Pages deployment.
   */
  basePath: isProd ? `/${repoName}` : '',

  /**
   * 3. assetPrefix
   * This is the most important part for fixing your CSS.
   * It tells Next.js to prefix all assets (CSS, JS, images)
   * with /rudra-enterprises/ so the HTML links to them correctly.
   * Only set in production for GitHub Pages deployment.
   */
  assetPrefix: isProd ? `/${repoName}/` : '',

  /**
   * 4. images: unoptimized
   * The default Next.js image optimizer (next/image)
   * does not work with static exports. This disables it and
   * uses the standard <img> tag, which will work.
   */
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;