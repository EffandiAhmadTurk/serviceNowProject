const fs = require('fs');
const { getListingPaths } = require('../../controllers/listing');

const pageSize = 20000;
let slugs = [];
let totalPages;
// We want to gradually introduce more pages
// We will manually control the amount of sitemaps to control exposure to google
const SITEMAP_LIMIT = 1;

const generateOffMarketListingSitemap = async page => {
  const { listings, total } = await getListingPaths({
    status: 'Off Market',
    pageSize,
    page,
  });
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
  const slug = `sitemap-off-market-listings-${page}.xml`;
  fs.writeFileSync(`public/${slug}`, sitemap);
  slugs.push(slug);
  const newPage = page + 1;

  totalPages = total / pageSize;

  if (page < totalPages && slugs <= SITEMAP_LIMIT) {
    generateOffMarketListingSitemap(newPage);
  }
};

const generateOffMarketListingSitemaps = async () => {
  const currentPage = 1;

  await generateOffMarketListingSitemap(currentPage);
  return slugs;
};

module.exports = generateOffMarketListingSitemaps;
