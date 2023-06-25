const dotenv = require('dotenv')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
}

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

module.exports = nextConfig
