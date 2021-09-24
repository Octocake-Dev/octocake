// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      // Uncomment only in development environment

      // "cdn.fakercloud.com"
    ],
  },
  redirects: require("./next-redirects"),
  headers: require("./next-headers"),
};
