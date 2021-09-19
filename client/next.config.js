// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  images: { domains: ["avatars.githubusercontent.com"] },
  redirects: require("./next-redirects"),
  headers: require("./next-headers"),
};
