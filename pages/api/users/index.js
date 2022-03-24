const { updateUser } = require('../../../services/content');

export default async (req, res) => {
  try {
    if (req.method === 'PUT') {
      // Process a POST request

      const { user } = req.body;
    }
    return res.status(201).send();
  } catch (error) {
    console.log(error);
    return res.status(400).send('Unable to submit contact info');
  }
};
