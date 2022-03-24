const {
  getPosts,
  getPost,
  getFeaturedPosts,
  getCategory,
  getCategories,
  getPostsByIds,
  getRelatedPosts,
} = require('../services/content');

exports.getBlogPosts = pageNum => {
  return getPosts({ pageNum });
};

exports.getFeaturedBlogPosts = query => {
  return getFeaturedPosts(query);
};

exports.getBlogPost = async slug => {
  const post = await getPost(slug);
  return post;
};

exports.getRelatedBlogPosts = async ({ currentPostId, categoryId }) => {
  const { posts } = await getRelatedPosts({ categoryId });
  const morePosts = posts.filter(({ _id }) => _id !== currentPostId);

  return morePosts;
};

exports.getBlogCategory = async slug => {
  const category = await getCategory(slug);

  if (category) {
    // sort blog posts
    const sortedPosts = category.posts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    category.posts = sortedPosts;
  }

  return category;
};

exports.getBlogCategories = () => {
  return getCategories();
};

exports.getBlogCategoryMenuItems = async () => {
  try {
    const categories = await getCategories();

    let menuItems = [];
    if (categories) {
      menuItems = categories.map(category => ({
        id: category.id,
        slug: category.slug,
        title: category.title,
      }));
    }

    return menuItems;
  } catch (error) {
    console.log('Error in getBlogCategoryMenuItems:', error.message);
    return [];
  }
};

exports.getBlogPostsByIds = async postIds => {
  const posts = await getPostsByIds(postIds);

  return posts;
};
