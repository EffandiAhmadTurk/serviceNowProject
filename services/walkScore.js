const axios = require('axios');

exports.getCommuteScores = async ({ lat, lng }) => {
  try {
    const { data: walkScore } = await axios.get(
      `https://api.walkscore.com/score?format=json&lat=${lat}&lon=${lng}&wsapikey=${process.env.WALK_SCORE_API_KEY}&transit=1&bike=1`
    );
    return walkScore;
  } catch (error) {
    console.log('Error @getWalkScore: ', error.message);
    return error.message;
  }
};
