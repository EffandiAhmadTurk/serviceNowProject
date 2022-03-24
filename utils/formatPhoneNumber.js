const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

const formatPhoneNumber = phone => {
  let formattedPhone = '';
  if (phone) {
    const parseAndKeepNumber =
      phoneUtil.parseAndKeepRawInput(phone, 'US') || '';
    formattedPhone = phoneUtil.formatInOriginalFormat(parseAndKeepNumber, 'US');
    return formattedPhone;
  } else {
    return null;
  }
};

module.exports = formatPhoneNumber;
