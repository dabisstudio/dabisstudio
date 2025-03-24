/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: [
      'ext.same-assets.com',
      'same-assets.com'
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
    ],
  },
};

export default nextConfig;
