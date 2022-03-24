const fs = require('fs');
const { getBlogPosts } = require('../../controllers/blog');

const generateBlogPostsSitemap = async () => {
  const { posts } = await getBlogPosts();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${
        posts
          ? posts
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
  const slug = `sitemap-blog.xml`;

  fs.writeFileSync(`public/${slug}`, sitemap);

  return slug;
};

module.exports = generateBlogPostsSitemap;
