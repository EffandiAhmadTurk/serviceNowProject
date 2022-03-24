const moment = require('moment');

const calcDaysOnMarket = (date, endDate) => {
  let end = moment(new Date());
  if (endDate) end = moment(new Date(endDate));
  const start = moment(new Date(date));
  return end.diff(start, 'days');
};

export default calcDaysOnMarket;
