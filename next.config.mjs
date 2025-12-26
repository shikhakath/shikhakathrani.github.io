/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate static files into ./out
  output: "export",

  // Needed for static export so Next doesn’t try to optimize images on the server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
