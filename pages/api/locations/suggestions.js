const { getLocationSuggestions } = require('../../../controllers/location');

export default async (req, res) => {
  try {
    const { userInput, locationTypes } = req.query;

    const suggestions = await getLocationSuggestions(userInput, locationTypes);
    return res.status(200).json(suggestions);
  } catch (error) {
    return res.status(400);
  }
};
