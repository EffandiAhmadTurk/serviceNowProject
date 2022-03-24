const fs = require('fs');
const { getLocationPaths } = require('../../controllers/location');

const generateCountiesSitemap = async () => {
  const counties = await getLocationPaths(['County']);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${counties
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

  const slug = 'sitemap-counties.xml';

  fs.writeFileSync(`public/${slug}`, sitemap);

  return slug;
};

module.exports = generateCountiesSitemap;
