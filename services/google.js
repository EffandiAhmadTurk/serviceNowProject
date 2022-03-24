const axios = require('axios');

exports.getGeo = async name => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${name}, TN&key=${process.env.GOOGLE_API_KEY}`
    );

    const {
      geometry: { location },
    } = results[0];

    return location;
  } catch (error) {
    console.log(error);
  }
};

exports.getAddressSuggestions = async address => {
  try {
    const createSuggestions = googleData => {
      return googleData.map(address => {
        const suggestion = {};
        suggestion.id = address.place_id;
        suggestion.address = address.description;
        return suggestion;
      });
    };

    const addressQuery = address.split(' ').join('+');
    const {
      data: { predictions },
    } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${addressQuery}&types=address&components=country:us&location=36.1627,-86.7816&radius=64373&key=${process.env.GOOGLE_API_KEY}`
    );

    return createSuggestions(predictions);
  } catch (error) {
    console.log(error);
  }
};
