const { createLocationReview } = require('../../../controllers/location');

export default async (req, res) => {
  try {
    const review = await createLocationReview(req.body);
    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
