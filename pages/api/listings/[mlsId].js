const { getListing } = require('../../../controllers/listing');

export default async (req, res) => {
  try {
    const { mlsId } = req.query;
    const listing = await getListing(mlsId);
    return res.status(200).json(listing);
  } catch (error) {
    return res.status(400);
  }
};
