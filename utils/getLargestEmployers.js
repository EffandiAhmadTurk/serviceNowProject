const getLargestEmployers = employment => {
  const employersArr = Object.entries(employment);
  const sortedEmployers = employersArr.sort((a, b) => {
    return b[1] - a[1];
  });
  const threeLargestEmployersArr = sortedEmployers.slice(0, 3);

  return threeLargestEmployersArr;
};

module.exports = getLargestEmployers;
