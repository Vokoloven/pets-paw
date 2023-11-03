/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    apiKey: process.env.API_KEY,
    url: process.env.URL,
  },
};

module.exports = nextConfig;
