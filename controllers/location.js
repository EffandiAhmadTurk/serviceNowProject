const dbConnect = require('../utils/dbConnect');
const Location = require('../models/Location');
const getLargestEmployers = require('../utils/getLargestEmployers');
const {
  getLocationContent,
  getLocationReviewsOfUser,
  createLocationReview,
  getLocationsByIds,
  getPostsByIds,
} = require('../services/content');
const { getCommuteScores } = require('../services/walkScore');
const { getYelpBusiness, getYelpReviews } = require('../services/yelp');

dbConnect();

exports.getLocation = async ({ slug, withGeo }) => {
  try {
    const locationInfo = await Location.findOne(
      {
        slug,
      },
      `-_id -__v ${withGeo ? '-geometry' : ''}`
    ).lean();

    if (locationInfo === null) return null;

    const { employment, lat, lng } = locationInfo;

    if (employment) {
      locationInfo.employment = getLargestEmployers(employment);
    }

    return { ...locationInfo, lat, lng };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

// Desc: used to return suggestions of locations based on user input
exports.getLocationSuggestions = async userInput => {
  try {
    const locations = await Location.find(
      {
        name: { $regex: userInput, $options: 'i' },
      },
      '-_id -__v -costs -income -employment -education -crime -currentPopulation -geometry'
    ).limit(10);

    return locations;
  } catch (error) {
    return error;
  }
};

exports.getLocationsCenterPoints = async locationSlugs => {
  try {
    const locationsCenterPoints = await Location.find(
      {
        slug: { $in: locationSlugs },
      },
      '-_id -__v -costs -income -employment -education -crime -currentPopulation -type -slug -stats -schools -lat -lng -name -geometry'
    );

    return locationsCenterPoints.reduce((points, location) => {
      points.push(location.center.coordinates);
      return points;
    }, []);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getLocationsPolygonCoordinates = async locationSlugs => {
  try {
    const locations = await Location.find(
      {
        slug: { $in: locationSlugs },
      },
      '-_id -__v -costs -income -employment -education -crime -currentPopulation -type -lat -lng -slug -stats -schools -center -name'
    );

    const locationsCoordinates = locations.reduce((totalCoords, location) => {
      location.geometry.coordinates.forEach(coord => totalCoords.push(coord));
      return totalCoords;
    }, []);

    return locationsCoordinates;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getTypeSlug = type => {
  switch (type) {
    case 'City':
      return 'city';
    case 'Neighborhood':
      return 'neighborhood';
    case 'Zip Code':
      return 'zip-code';
    case 'County':
      return 'county';
    default:
      return '';
  }
};

const getStateSlug = state => {
  switch (state) {
    case 'TN':
      return 'tn';
    default:
      return '';
  }
};

const getCitySlug = cityPath => {
  const arr = cityPath.split('/');
  return arr[arr.length - 1];
};

exports.getLocationPaths = async locationTypes => {
  try {
    const typeQuery = locationTypes || [
      'City',
      'Zip Code',
      'Neighborhood',
      'County',
    ];
    let query = {};
    query.type = { $in: typeQuery };

    const rawLocations = await Location.find(query)
      .sort([['stats.totalNumberOfclosedSales', -1]])
      .lean();

    const locations = rawLocations.map(
      ({ path, name, slug, type, state, city }) => ({
        name,
        slug,
        path,
        citySlug: city && getCitySlug(city.path),
        stateSlug: getStateSlug(state.name),
        typeSlug: getTypeSlug(type),
      })
    );

    return locations;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

exports.getNearbyLocations = async (
  geometry,
  maxDistance,
  locationType = 'City'
) => {
  try {
    const locations = await Location.aggregate([
      {
        $geoNear: {
          near: geometry,
          distanceField: 'center',
          maxDistance: maxDistance,
          query: {
            center: {
              $ne: geometry,
            },
          },
        },
      },
    ]);

    const cleanLocations = locations.map(({ path, slug, name, type }) => ({
      slug,
      name,
      type,
      path,
    }));

    const end = geometry ? 20 : undefined;

    const nearbyLocations = cleanLocations
      .filter(({ type }) => type === locationType)
      .slice(0, end);

    return nearbyLocations;
  } catch (error) {
    console.log(`Error occured in getNearbyLocations: ${error.message}`);
    return null;
  }
};

exports.getLocationContent = async slug => {
  try {
    const locationContent = await getLocationContent(slug);
    return locationContent;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

exports.getLocationCommuteScores = async geo => {
  try {
    const { walkscore, description, bike, transit } = await getCommuteScores(
      geo
    );
    const scores = {};
    scores.walk = null;
    if (walkscore && description) {
      scores.walk = {
        score: walkscore,
        description: description,
      };
    }
    scores.bike = bike || null;
    scores.transit = transit || null;

    return scores;
  } catch (error) {
    throw error;
  }
};

exports.getLocationYelpReview = async query => {
  try {
    const { yelpId } = query;

    const rawYelpBusiness = await getYelpBusiness(yelpId);
    const rawYelpReviews = await getYelpReviews(yelpId);

    const review = rawYelpReviews.map(({ url, text }) => ({ url, text }))[0];

    const yelpReview = {
      reviewCount: rawYelpBusiness.review_count,
      rating: rawYelpBusiness.rating,
      imageUrl: rawYelpBusiness.image_url,
      review,
    };

    return yelpReview;
  } catch (error) {}
};

exports.createLocationReview = async reviewInfo => {
  try {
    const { userId, locationSlug } = reviewInfo;

    const reviews = await getLocationReviewsOfUser(userId);

    const hasLocationReview = () => {
      return !!reviews.find(review => review.location.slug === locationSlug);
    };

    let review = null;
    if (hasLocationReview()) {
      throw new Error('duplicate');
    } else {
      const location = await getLocationContent(locationSlug);
      reviewInfo.location = location.id;
      reviewInfo.user = userId;
      reviewInfo.status = 'draft';
      review = createLocationReview(reviewInfo);
    }
    return review;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

exports.getSimilarLocations = async locationIds => {
  try {
    const rawSimilarLocations = await getLocationsByIds(locationIds);

    const similarLocations = rawSimilarLocations.map(
      ({ name, slug, featuredImage }) => {
        const { formats } = featuredImage || {};
        const { small, thumbnail } = formats || {};
        let imageUrl = null;
        if (small) imageUrl = small.url;
        if (thumbnail) imageUrl = thumbnail.url;

        return {
          name,
          slug,
          imageUrl,
        };
      }
    );

    return similarLocations;
  } catch (error) {
    throw error;
  }
};

exports.getRelatedPosts = async postIds => {
  try {
    const rawRelatedPosts = await getPostsByIds(postIds);

    const relatedPosts = rawRelatedPosts.map(({ title, slug, image }) => {
      return {
        title,
        slug,
        image,
      };
    });

    return relatedPosts;
  } catch (error) {
    throw error;
  }
};
