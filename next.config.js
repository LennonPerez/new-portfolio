/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MY_RESUME_LINK: process.env.MY_RESUME_LINK,
    CONTACT_SERVICE_ID: process.env.CONTACT_SERVICE_ID,
    CONTACT_TEMPLATE_ID: process.env.CONTACT_TEMPLATE_ID,
    CONTACT_PUBLIC_KEY: process.env.CONTACT_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
