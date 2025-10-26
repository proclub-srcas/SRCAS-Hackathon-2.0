import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Handle video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      type: 'asset/resource',
    });
    
    return config;
  },
  // Handle static assets
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Enable experimental features if needed
  experimental: {
    turbo: {
      rules: {
        '*.mp4': {
          loaders: ['file-loader'],
          as: '*.mp4',
        },
      },
    },
  },
};

export default nextConfig;
