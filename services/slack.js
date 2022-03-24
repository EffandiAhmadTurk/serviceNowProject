const axios = require('axios');

exports.sendLead = async ({
  name,
  phone,
  email,
  tourAddress,
  addressLink,
  category,
  action,
}) => {
  try {
    // Send lead to Slack

    const slackPayload = {
      text: 'New Signup!!!',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `
*Source:* felixhomes.com
*Name:* ${name || ''}
*Phone:* ${phone || ''}
*Email:* ${email || ''}
*Interested In:* ${category || ''}
*Tour Address:* ${tourAddress || ''}
*Address Link:* ${addressLink || ''}
*Action Taken:* ${action || ''}
            `,
          },
        },
      ],
    };

    await axios.post(
      'https://hooks.slack.com/services/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',
      slackPayload
    );
  } catch (error) {
    console.log('sendLead Error => ', error.message);
    throw new Error(error.message);
  }
};
