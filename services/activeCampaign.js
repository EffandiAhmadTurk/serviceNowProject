const queryString = require('query-string');
const axios = require('axios');

exports.saveLead = async ({
  name,
  phone,
  email,
  tourAddress,
  tourDate,
  tourTime,
  category,
  action,
  clientId,
}) => {
  try {
    const payload = {
      api_key: process.env.AC_API_KEY,
      api_output: 'json',
      email,
      first_name: name,
      phone,
      'p[1]': 6,
      //   Tour Address Field
      'field[69,0]': tourAddress,
      //   Tour Date Field
      'field[71,0]': tourDate,
      //   Tour Time Field
      'field[72,0]': tourTime,
      'field[74, 0]': clientId,
      tags: `Mainsite, ${category ? `${category},` : ''} ${action}`,
    };

    const stringifiedPayload = queryString.stringify(payload);

    const {
      data: { subscriber_id: acContactId },
    } = await axios.post(
      `https://felixhomes.api-us1.com/admin/api.php?api_action=contact_sync`,
      stringifiedPayload,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return acContactId;
  } catch (error) {
    console.log('saveLead Error =>', error.message);
    throw new Error(error.message);
  }
};
