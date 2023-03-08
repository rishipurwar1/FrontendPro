const siteUrl = "https://www.frontendpro.dev"

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/*/my-solutions",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },
  changefreq: "monthly",
}
