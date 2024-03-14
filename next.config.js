/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

const nextConfig = {
    ...withFonts(),
};

module.exports = nextConfig;