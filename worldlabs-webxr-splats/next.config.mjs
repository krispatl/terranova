/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Spark uses WebAssembly; Next/Vercel is fine as long as it's client-side.
  webpack: (config) => {
    // Allow loading .wasm files used by Spark (client-side)
    config.experiments = { ...(config.experiments || {}), asyncWebAssembly: true };
    return config;
  },
};
export default nextConfig;
