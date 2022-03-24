const { getFaqs: getStrapiFaqs } = require('../services/content');

exports.getFaqs = type => {
  return getStrapiFaqs(type);
};
