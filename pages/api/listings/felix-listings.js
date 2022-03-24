const { getFelixListings } = require('../../../controllers/listing');

export default async (req, res) => {
  try {
    const listings = await getFelixListings(req.query);

    return res.status(200).json(listings);
  } catch (error) {
    return res.status(400);
  }
};
