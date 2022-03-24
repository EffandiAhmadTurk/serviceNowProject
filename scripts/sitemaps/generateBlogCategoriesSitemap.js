const fs = require('fs');
const { getBlogCategories } = require('../../controllers/blog');

const generateBlogCategoriesSitemap = async () => {
  const categories = await getBlogCategories();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${
        categories
          ? categories
              .map(({ slug }) => {
                return `
                  <url>
                      <loc>${`https://www.felixhomes.com/blog/${slug}`}</loc>
                  </url>
              `;
              })
              .join('')
          : ''
      }
  </urlset>
`;
  const slug = `sitemap-blog-categories.xml`;

  fs.writeFileSync(`public/${slug}`, sitemap);

  return slug;
};

module.exports = generateBlogCategoriesSitemap;
