const fs = require('fs');
const { getLocationPaths } = require('../../controllers/location');

const generateCitiesSitemap = async () => {
  const cities = await getLocationPaths(['City']);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${cities
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

  const slug = 'sitemap-cities.xml';

  fs.writeFileSync(`public/${slug}`, sitemap);

  return slug;
};

module.exports = generateCitiesSitemap;
