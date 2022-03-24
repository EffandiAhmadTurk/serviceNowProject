const { getReviews } = require('../services/content');

exports.getReviews = () => {
  return getReviews();
};
