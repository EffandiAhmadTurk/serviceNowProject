const { getSimilarListings } = require('../../../controllers/listing');

export default async (req, res) => {
  try {
    const { geometry, mlsId } = req.query;

    const jsonGeo = JSON.parse(geometry);

    const listings = await getSimilarListings(jsonGeo, mlsId);

    return res.status(200).json(listings);
  } catch (error) {
    return res.status(400);
  }
};
