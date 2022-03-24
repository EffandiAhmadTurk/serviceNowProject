const fs = require('fs');

const generateParentSitemap = async slugs => {
  const lastModified = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${slugs
    .map(
      slug =>
        `<sitemap>
         <loc>https://www.felixhomes.com/${slug}</loc>
         <lastmod>${lastModified}</lastmod>
       </sitemap>
      `
    )
    .join('')}

  </sitemapindex>
`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
};

module.exports = generateParentSitemap;
