const fs = require('fs');
const { getLocationPaths } = require('../../controllers/location');

const generateZipCodesSitemap = async () => {
  const zipCodes = await getLocationPaths(['Zip Code']);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${zipCodes
        .map(({ path }) => {
          return `
                  <url>
                      <loc>https://www.felixhomes.com${path}</loc>
                  </url>
              `;
        })
        .join('')}
  </urlset>
`;

  const slug = 'sitemap-zip-codes.xml';

  fs.writeFileSync(`public/${slug}`, sitemap);

  return slug;
};

module.exports = generateZipCodesSitemap;
