const { submitUserInfo } = require('../../../controllers/user');
const { updateUser } = require('../../../services/content');

export default async (req, res) => {
  try {
    const userInfo = req.body;
    // Add contact to CRM
    const acContactId = await submitUserInfo(userInfo);

    // Update admin to include names of user
    if (userInfo.id) {
      updateUser(userInfo);
    }
    return res.status(201).send({
      msg: 'Successfully submited user contact info',
      contactId: acContactId,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send('Unable to submit contact info');
  }
};
