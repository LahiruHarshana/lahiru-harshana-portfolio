// next.config.js

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Your existing config options might be here */
  reactStrictMode: true, // Example existing option, keep yours if different

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      { // New entry for Amazon media
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      // You can add other hostnames here if needed
    ],
  },
};

export default nextConfig;