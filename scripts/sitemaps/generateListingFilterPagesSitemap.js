const fs = require('fs');
const {
  filterLocationSlugs,
  listingFilters,
} = require('../../utils/listingFilterUtils');

const generateListingFilterPagesSitemap = async () => {
  try {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${listingFilters
          .map(({ slug: listingFilterSlug }) => {
            return filterLocationSlugs
              .map(
                locationSlug =>
                  `
              <url>
                  <loc>${`https://www.felixhomes.com/homes-for-sale/city/tn/${locationSlug}/${listingFilterSlug}`}</loc>
              </url>
          `
              )
              .join('');
          })
          .join('')}
    </urlset>
  `;

    const slug = `sitemap-listing-filters.xml`;

    fs.writeFileSync(`public/${slug}`, sitemap);

    return slug;
  } catch (error) {
    console.log(error.messsage);
  }
};

module.exports = generateListingFilterPagesSitemap;
