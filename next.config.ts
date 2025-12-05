/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Allow dev server to run on LAN (your PC local network)
    allowedDevOrigins: [
      "http://localhost:3000",
      "http://192.168.1.3:3000", // your LAN IP
    ],
  },
};

export default nextConfig;
