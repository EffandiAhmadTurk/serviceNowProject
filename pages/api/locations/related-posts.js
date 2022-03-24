const { getRelatedPosts } = require('../../../controllers/location');

export default async (req, res) => {
  try {
    const { postIds: rawPostIds } = req.query;

    const postIds = rawPostIds.split(',');

    const relatedPosts = await getRelatedPosts(postIds);
    return res.status(200).json(relatedPosts);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
