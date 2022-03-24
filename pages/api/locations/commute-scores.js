const { getLocationCommuteScores } = require('../../../controllers/location');

export default async (req, res) => {
  try {
    const commuteScores = await getLocationCommuteScores(req.query);
    return res.status(200).json(commuteScores);
  } catch (error) {
    return res.status(400).json(null);
  }
};
