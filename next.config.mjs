/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
          },
          {
            protocol: 'https',
            hostname: 'kargakarga.com',
          },
          {
            protocol: 'http',
            hostname: 'w3.org',
          },
        ],
      },
};

export default nextConfig;
