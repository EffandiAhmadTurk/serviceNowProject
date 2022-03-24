const fs = require('fs');
const { getListingPaths } = require('../../controllers/listing');

const generateListingPagesSitemap = async () => {
  const { listings } = await getListingPaths({ status: 'Active' });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${listings
        .map(({ path }) => {
          return `
                  <url>
                      <loc>${`https://www.felixhomes.com${path}`}</loc>
                  </url>
              `;
        })
        .join('')}
  </urlset>
`;

  const slug = `sitemap-listings.xml`;

  fs.writeFileSync(`public/${slug}`, sitemap);

  return slug;
};

module.exports = generateListingPagesSitemap;
