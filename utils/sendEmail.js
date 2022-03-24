const mailgunApiKey = process.env.MAILGUN_API_KEY;
const mailgunDomain = process.env.MAILGUN_DOMAIN;
const mailgun = require('mailgun.js');

const mg = mailgun.client({
  username: 'api',
  key: mailgunApiKey || '',
});

const sendEmail = (emailInfo = {}) =>
  mg.messages.create(mailgunDomain, emailInfo);

module.exports = sendEmail;

/* Example for email info object */
// const emailInfo = {
//     to: `${process.env.OPERATIONS_EMAIL}`,
//     from: 'Scout <info@foragerscs.com>',
//     subject: `Load ${loadNumber} has been created by ${companyName}`,
//     html: `
//       <h3>New Load:</h3>
//       <p>Customer Name: ${companyName}</p>
//       `,
//   };
