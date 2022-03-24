const fs = require('fs');
const { getLocationPaths } = require('../../controllers/location');

const generateNeighborhoodsSitemap = async () => {
  const neighborhoods = await getLocationPaths(['Neighborhood']);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${neighborhoods
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

  const slug = 'sitemap-neighborhoods.xml';

  fs.writeFileSync(`public/${slug}`, sitemap);

  return slug;
};
generateNeighborhoodsSitemap();
module.exports = generateNeighborhoodsSitemap;
