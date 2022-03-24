const sendEmail = require('../utils/sendEmail');
const { saveLead } = require('../services/activeCampaign');
const { sendLead } = require('../services/slack');
const { createEmailTemplate } = require('../utils/emailTemplates');
const formatPhoneNumber = require('../utils/formatPhoneNumber');

exports.submitUserInfo = async ({
  firstName,
  lastName,
  email,
  phoneNumber,
  date,
  time,
  address,
  addressLink,
  category,
  action,
  clientId,
}) => {
  const name = firstName && firstName ? `${firstName} ${lastName}` : '';
  const phone = formatPhoneNumber(phoneNumber);
  try {
    const html = createEmailTemplate({
      name,
      email,
      phone,
      category,
      date,
      time,
      address,
      addressLink,
    });
    const subject = `${firstName} would like to schedule a ${action}!`;

    let emailInfo = {
      to: 'contact@felixhomes.com',
      from: 'Felix <contact@felixhomes.com>',
      subject,
      html,
    };
    await sendEmail(emailInfo);
    const acContactId = await saveLead({
      name,
      email,
      phone,
      tourAddress: address,
      tourDate: date,
      tourTime: time,
      addressLink,
      category,
      action,
      clientId,
    });

    await sendLead({
      name,
      phone,
      action,
      email,
      tourAddress: address,
      addressLink,
      category,
      action,
    });

    return acContactId;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
