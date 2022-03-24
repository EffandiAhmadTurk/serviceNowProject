const moment = require('moment');

const formatDate = (date = new Date()) => {
  return moment(date).format('MMM Do YYYY');
};

export default formatDate;
