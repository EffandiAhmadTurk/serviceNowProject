const { getBlogPostsByIds } = require('../../../controllers/blog');

export default async (req, res) => {
  try {
    const { 'postIds[]': postIds } = req.query;

    const posts = await getBlogPostsByIds(postIds);

    const postDetails = posts.map(post => ({
      name: post.name || post.title || null,
      slug: post.slug || null,
    }));

    return res.status(200).json(postDetails);
  } catch (error) {
    console.log('Error in /api/related-posts:', error.message);
    return res.status(400);
  }
};
