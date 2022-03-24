const { getSchools } = require('../../../controllers/school');

export default async (req, res) => {
  try {
    const schools = await getSchools(req.query);
    return res.status(200).json(schools);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json(null);
  }
};
