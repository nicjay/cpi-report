/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true
    },
    newNextLinkBehavior: true,
    browsersListForSwc: true,
    legacyBrowsers: false
  }
};

module.exports = nextConfig;
