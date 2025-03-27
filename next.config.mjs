/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: [
      'ext.same-assets.com',
      'same-assets.com',
      'your-wordpress-domain.com' // Replace with your actual WordPress domain
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'same-assets.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'your-wordpress-domain.com', // Replace with your actual WordPress domain
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_WORDPRESS_API_URL: 'https://your-wordpress-domain.com/wp-json/wp/v2', // Replace with your actual WordPress API URL
  },
};

export default nextConfig;
