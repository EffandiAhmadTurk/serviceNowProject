const { getLocationYelpReview } = require('../../../controllers/location');

export default async (req, res) => {
  try {
    const yelpReviews = await getLocationYelpReview(req.query);
    return res.status(200).json(yelpReviews);
  } catch (error) {
    return res.status(400).json(null);
  }
};
