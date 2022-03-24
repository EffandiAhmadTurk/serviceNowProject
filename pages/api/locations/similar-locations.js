const { getSimilarLocations } = require('../../../controllers/location');

export default async (req, res) => {
  try {
    const { locationIds: rawLocationIds } = req.query;

    const locationIds = rawLocationIds.split(',');

    const similarLoctions = await getSimilarLocations(locationIds);
    return res.status(200).json(similarLoctions);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
