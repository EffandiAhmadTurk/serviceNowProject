const fs = require('fs');
const globby = require('globby');
const { getResourcePages } = require('../../controllers/resource');

const generateResourcePagesSitemap = async () => {
  const staticPages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/404.js',
    '!pages/410.js',
    '!pages/homes-for-sale/[locationSlug]',
    '!pages/homes-for-sale/[type]/[state]/[cityZipCodeCounty]',
    '!pages/homes-for-sale/[type]/[state]/[cityZipCodeCounty]/[neighborhoodOrFilter]',
    '!pages/sitemap/[locationSlug]/index.js',
    '!pages/tos',
    '!pages/privacy-policy',
    '!pages/auth/[provider]/callback',
    '!pages/feed',
    '!pages/sitemap',
    '!pages/reset-password',
    '!pages/blog/[slug].js',
    '!pages/resources/[slug].js',
    '!pages/home-for-sale/[address]/[mlsId].js',
    '!pages/real-estate-agent',
    '!pages/real-estate-agents',
    '!pages/api',
    'posts/*.md',
  ]);

  const dynamicPages = await getResourcePages();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(page => {
          const path = page
            .replace('pages', '')
            .replace('.js', '')
            .replace('.md', '')
            .replace('/index', '');

          const route = path === '/index' ? '' : path;
          return `
                  <url>
                      <loc>${`https://www.felixhomes.com${route}`}</loc>
                  </url>
              `;
        })
        .join('')}
        ${dynamicPages
          .map(({ slug }) => {
            return `
            <url>
              <loc>${`https://www.felixhomes.com/resources/${slug}`}</loc>
            </url>
         `;
          })
          .join('')}
  </urlset>
`;

  const slug = `sitemap-landing.xml`;

  fs.writeFileSync(`public/${slug}`, sitemap);

  return slug;
};

generateResourcePagesSitemap();
module.exports = generateResourcePagesSitemap;
