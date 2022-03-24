const { getAgents } = require('../../../controllers/agent');

export default async (req, res) => {
  const { locationSlug, page } = req.query;
  const pageQuery = parseInt(page);
  try {
    const agentsResults = await getAgents(locationSlug, pageQuery);
    return res.status(200).json(agentsResults);
  } catch (error) {
    return res.status(400);
  }
};
