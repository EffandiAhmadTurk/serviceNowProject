const { getAddressSuggestions } = require('services/google');

export default async (req, res) => {
  try {
    const { address } = req.query;
    const suggestions = await getAddressSuggestions(address);
    return res.status(200).json(suggestions);
  } catch (error) {
    return res.status(400);
  }
};
