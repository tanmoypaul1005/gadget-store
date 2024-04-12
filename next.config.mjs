/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['m.media-amazon.com', 'images.unsplash.com'],
    },
};

export default nextConfig;

// const nextConfig = {
//     experimental: {
//       esmExternals: "loose", // <-- add this
//       serverComponentsExternalPackages: ["mongoose"] // <-- and this
//     },
//     // and the following to enable top-level await support for Webpack
//     webpack: (config) => {
//       config.experiments = {
//         topLevelAwait: true
//       };
//       return config;
//     },
//   }
