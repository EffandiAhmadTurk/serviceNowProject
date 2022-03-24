const { getSchools } = require('../services/greatSchools');
const capitalize = require('../utils/capitalize');

const getLevel = school => {
  school.elementary = school['level-codes'].includes('e');
  school.middle = school['level-codes'].includes('m');
  school.high = school['level-codes'].includes('h');
  return school;
};

exports.getSchools = async query => {
  try {
    const schools = await getSchools(query);

    const schoolInfo = schools.map(school => {
      if (school) {
        const schoolLevelArray = school.level.split(',');

        school.type = capitalize(school?.type);
        school.levelRange = `${schoolLevelArray[0]} - ${
          schoolLevelArray[schoolLevelArray.length - 1]
        }`;
        return getLevel(school);
      }
    });

    return schoolInfo;
  } catch (error) {
    console.log('Error @ getSchools: ', error.message);
    throw new Error(error.message);
  }
};
