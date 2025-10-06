/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["plus.unsplash.com" ,"motionview.com.bd",'m.media-amazon.com',"adminapi.applegadgetsbd.com",'www.applegadgetsbd.com', 'adminapi.applegadgetsbd.com', 'images.unsplash.com', 'lh3.googleusercontent.com', 'i.imgur.com'],
  },
  reactStrictMode: false,
  unoptimized: true,
  serverActions: {
    bodySizeLimit: '2mb' // Set desired value here
  }
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
