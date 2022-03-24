const { getLandingPageMenuItems } = require('../../../controllers/resource');

export default async (req, res) => {
  try {
    const landingPageMenuItems = await getLandingPageMenuItems();

    return res.status(200).json(landingPageMenuItems);
  } catch (error) {
    return res.status(400);
  }
};
