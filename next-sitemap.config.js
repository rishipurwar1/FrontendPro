const siteUrl = "https://www.frontendpro.dev"

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
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
    additionalSitemaps: [`${siteUrl}/sitemap.xml`, `${siteUrl}/server-sitemap.xml`],
  },
  changefreq: "monthly",
  exclude: ["/server-sitemap-index.xml"],
}
