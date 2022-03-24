const { getBlogCategoryMenuItems } = require('../../../controllers/blog');

export default async (req, res) => {
  try {
    const blogCategoryMenuItems = await getBlogCategoryMenuItems();

    return res.status(200).json(blogCategoryMenuItems);
  } catch (error) {
    return res.status(400);
  }
};
