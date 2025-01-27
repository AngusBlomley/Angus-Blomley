/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.angusblomley.com',
    generateRobotsTxt: true,
    exclude: ["/admin/**", "/private/**"],
    robotsTxtOptions: {
      policies: [
        { userAgent: "*", allow: "/" },
      ],
      additionalSitemaps: [
        'https://www.angusblomley.com/sitemap-0.xml',
      ],
    },
  };
  