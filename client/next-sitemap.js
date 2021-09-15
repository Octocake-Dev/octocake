module.exports = {
  siteUrl: "https://octocake.netlify.app",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://octocake.netlify.app/server-sitemap.xml"],
  },
};
