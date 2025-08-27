// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


// 

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Handle optional ws dependencies
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'utf-8-validate': false,
        'bufferutil': false,
      };
    }
    
    // Suppress warnings about optional dependencies
    config.ignoreWarnings = [
      /Module not found: Error: Can't resolve 'utf-8-validate'/,
      /Module not found: Error: Can't resolve 'bufferutil'/,
    ];
    
    return config;
  },
};

module.exports = nextConfig;