const Listing = require('../models/Listing');
const { getLocationsPolygonCoordinates } = require('../controllers/location');
const {
  LIST_LISTINGS_PAGE_SIZE,
  MAP_LISTINGS_PAGE_SIZE,
} = require('../utils/constants');
const queryString = require('query-string');
const dbConnect = require('../utils/dbConnect');

dbConnect();

// We're showing way more properties on the map
// Therefor the page number gets updated as a ratio of the list page
const calcMapPage = currentPage => {
  if (!currentPage) return 1;
  const mapListRatio = MAP_LISTINGS_PAGE_SIZE / LIST_LISTINGS_PAGE_SIZE;
  return Math.ceil(currentPage / mapListRatio);
};

const getSubtype = value => {
  switch (value) {
    case 'townhouse':
      return 'Townhouse';
    case 'singleFamily':
      return 'Single Family Residence';
    case 'condo':
      return 'Flat Condo';
    default:
      return 'Single Family Residence';
  }
};

const buildQueryObject = async searchParams => {
  const {
    beds,
    baths,
    priceFrom,
    priceTo,
    locations,
    type,
    filter,
    'locations[]': locationsArray,
    daysOnMarket,
  } = searchParams;

  const query = {
    // Getting active listings by default
    status: { $in: ['Active', 'Coming Soon'] },
  };

  try {
    if (beds) query.beds = { $gte: parseInt(beds) };
    if (baths) query.bathsTotal = { $gte: parseInt(baths) };
    // Price Related Filters
    if (priceFrom) query.listPrice = { $gte: parseInt(priceFrom) };
    if (filter === 'luxury-homes') query.listPrice = { $gte: 750000 };

    if (priceTo) query.listPrice = { $lte: parseInt(priceTo) };
    if (filter === 'cheap-homes') query.listPrice = { $lte: 250000 };

    if (priceFrom && priceTo)
      query.listPrice = { $gte: parseInt(priceFrom), $lte: parseInt(priceTo) };

    if (daysOnMarket) query.daysOnMarket = parseInt(daysOnMarket);

    // Location Filter
    if (locationsArray || locations) {
      const locationsFilter = locationsArray || [locations];

      const geometry = await getLocationsPolygonCoordinates(locationsFilter);
      query.geometry = {
        $geoWithin: {
          $geometry: {
            type: 'MultiPolygon',
            coordinates: geometry,
          },
        },
      };
    }

    // Type Related Filters
    if (type) query.propertySubType = getSubtype(type);
    if (filter === 'townhouses')
      query.propertySubType = getSubtype('townhouse');
    if (filter === 'condos') query.propertySubType = getSubtype('condo');

    // Special Filters
    if (filter === 'waterfront-homes') query.isWaterFront = true;
    if (filter === 'single-story-homes') query.stories = 1;
    if (filter === 'new-construction-homes') query.isNewConstruction = true;
    if (filter === 'historic-homes') query.yearBuilt = { $lte: 1950 };
    if (filter === 'senior-community-homes') query.isSeniorCommunity = true;
    if (filter === 'homes-with-swimming-pool') query.hasPool = true;

    if (filter === 'new-listings') {
      const startTime = new Date(new Date().setUTCHours(0, 0, 0, 0)).setDate(
        new Date().getDate() - 1
      );
      query.onMarketDateTime = { $gte: startTime };
    }
    // Days on Market
    if (daysOnMarket) {
      const parsedDOM = parseInt(daysOnMarket);
      // Adjusting days to work with a time
      // Must add 1 to because UTC sets to next day
      const offSet = 1 + parsedDOM;
      // Examples:
      // 0 days on market = listed at anytime today
      // 1 day on market = listed at anytime yesterday
      const startTime = new Date(new Date().setUTCHours(0, 0, 0, 0)).setDate(
        new Date().getDate() - offSet
      );

      query.onMarketDateTime = {
        $gte: startTime,
      };
    }
    return query;
  } catch (error) {
    console.log(error.message);
  }
};

const getListingTileData = listings => {
  // Return List Listings Model
  return listings.map(listing => {
    const {
      mlsId,
      address: { street, city, zipCode, state, slug },
      listPrice,
      beds,
      bathsFull,
      bathsHalf,
      images,
      livingAreaSF,
      lat,
      lng,
      description,
      isNewConstruction,
      yearBuilt,
      propertySubType,
      daysOnMarket,
      status,
    } = listing;

    // calc the number of baths
    const baths = bathsFull + bathsHalf / 2;

    const data = {
      mlsId,
      address: {
        street,
        city,
        zipCode,
        state,
        slug,
      },
      listPrice,
      beds,
      bathsFull,
      baths,
      lat,
      lng,
      image: images && images[0] ? images[0].url : null,
      livingAreaSF,
      description,
      isNewConstruction,
      yearBuilt,
      propertySubType,
      daysOnMarket,
      status,
    };

    return data;
  });
};

exports.getListings = async searchParams => {
  const limit = searchParams.limit;

  const query = await buildQueryObject(searchParams);

  try {
    const { docs, totalDocs } = await Listing.paginate(query, {
      limit,
      populate: 'images',
      sort: { onMarketDateTime: -1 },
      forceCountFn: true,
    });

    const listings = getListingTileData(docs);

    return { listings, total: totalDocs };
  } catch (error) {
    console.log('Error getListings:', error.message);
    // TODO Handle error
    return { listings: [], total: 0 };
  }
};

exports.getListing = async mlsId => {
  try {
    const listingArr = await Listing.aggregate([
      {
        $match: { mlsId },
      },

      {
        $lookup: {
          from: 'images',
          let: { listingMlsId: '$mlsId' },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ['$mlsId', '$$listingMlsId'] },
              },
            },
            { $project: { url: 1, _id: 0 } },
          ],
          as: 'images',
        },
      },

      {
        $lookup: {
          from: 'locations',
          let: { city: '$address.city' },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ['$name', '$$city'] },
              },
            },
            { $project: { name: 1, slug: 1, _id: 0 } },
          ],
          as: 'currentCity',
        },
      },
      {
        $unwind: {
          path: '$currentCity',
          preserveNullAndEmptyArrays: true,
        },
      },

      {
        $project: { __v: 0, _id: 0 },
      },
    ]);

    const listing = listingArr[0];

    if (listing) {
      // Convert lastUpdateDateTime
      listing.lastUpdateDateTime = listing.lastUpdateDateTime
        ? listing.lastUpdateDateTime.toString()
        : null;
      // Convert lastUpdateDateTime
      listing.onMarketDateTime = listing.onMarketDateTime
        ? listing.onMarketDateTime.toString()
        : null;
      // Convert pendingDateTime
      listing.pendingDateTime = listing.pendingDateTime
        ? listing.pendingDateTime.toString()
        : null;
      // Convert offMarketDateTime
      listing.offMarketDateTime = listing.offMarketDateTime
        ? listing.offMarketDateTime.toString()
        : null;
      // Convert closeDate
      listing.closeDate = listing.closeDate
        ? listing.closeDate.toString()
        : null;

      listing.images = listing.images.map(img => img.url);
    }

    return listing;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

// Desc: Used to generate sitemap for all active listings
exports.getListingPaths = async query => {
  const { page, pageSize, ...params } = query;
  try {
    const { docs: listings, totalDocs: total } = await Listing.paginate(
      params,
      {
        page: page,
        limit: pageSize || null,
        sort: { onMarketDateTime: -1 },
      }
    );

    return { listings, total };
  } catch (error) {
    console.log('Error @ getListingPaths =>', error.message);
    return [];
  }
};

exports.getSimilarListings = async (geometry, mlsId) => {
  try {
    const listings = await Listing.find({
      status: 'Active',
      geometry: {
        $near: {
          // one mile distance in meters
          $maxDistance: 1609,
          $geometry: geometry,
        },
      },
    })
      .limit(15)
      .populate({ path: 'images', select: 'url -_id' });

    const similarListings = getListingTileData(listings).filter(
      listing => listing.mlsId !== mlsId
    );

    return similarListings;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

exports.getNearbyListings = async (geometry, mlsId) => {
  try {
    const listings = await Listing.find({
      status: 'Active',
      geometry: {
        $near: {
          // 5 mile distance in meters
          $maxDistance: 8045,
          $geometry: geometry,
        },
      },
    }).limit(20);

    const nearbyListings = listings
      .map(({ address, mlsId }) => ({
        street: address.street,
        city: address.city,
        slug: address.slug,
        mlsId,
      }))
      .filter(({ mlsId: nearbyMlsId }) => mlsId !== nearbyMlsId);

    return nearbyListings;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

exports.getFelixListings = async query => {
  const { status } = query;
  try {
    let statusQuery;
    if (status) {
      const pendingIndex = status.indexOf('Pending');
      status.splice(
        pendingIndex,
        1,
        'Under Contract - Showing',
        'Under Contract - Not Showing'
      );
      statusQuery = status;
    } else {
      statusQuery = [
        'Active',
        'Closed',
        'Under Contract - Showing',
        'Under Contract - Not Showing',
      ];
    }

    const felixMlsId = 'RTC56577';

    const listings = await Listing.find({
      $or: [
        { 'listingAgent.mlsId': felixMlsId },
        { 'buyerAgent.mlsId': felixMlsId },
      ],
      status: { $in: statusQuery },
    }).populate({ path: 'images', select: 'url -_id' });

    const soldByFelixListings = listings.map(
      ({
        address,
        mlsId,
        closePrice,
        images,
        status,
        listingAgent,
        buyerAgent,
      }) => {
        const isSell = listingAgent.mlsId === felixMlsId ? true : false;
        let isBuy = false;
        if (buyerAgent) {
          isBuy = buyerAgent.mlsId === felixMlsId ? true : false;
        }

        return {
          street: address.street,
          city: address.city,
          closePrice,
          mlsId,
          status,
          image: images && images[0] ? images[0].url : null,
          isSell,
          isBuy,
        };
      }
    );

    return soldByFelixListings;
  } catch (error) {
    return error.message;
  }
};

exports.getSoldByFelixListings = async () => {
  const listings = await Listing.find({
    $or: [
      { 'listingAgent.mlsId': 'RTC56577' },
      { 'buyerAgent.mlsId': 'RTC56577' },
    ],
    status: 'Closed',
  }).populate({ path: 'images', select: 'url -_id' });

  const soldByFelixListings = listings.map(
    ({ address, mlsId, closePrice, images }) => {
      return {
        street: address.street,
        city: address.city,
        closePrice,
        mlsId,
        image: images && images[0] ? images[0].url : null,
      };
    }
  );

  return soldByFelixListings;
};

exports.getAgentListings = async mlsId => {
  try {
    const listings = await Listing.find({
      'listingAgent.mlsId': mlsId,
    })
      .populate({ path: 'images', select: 'url -_id' })
      .sort({ onMarketDateTime: -1 })
      .limit(100);

    const agentListings = listings.map(
      ({
        status,
        address,
        mlsId,
        images,
        listPrice,
        lat,
        lng,
        onMarketDateTime,
        offMarketDateTime,
        closePrice,
      }) => {
        return {
          status,
          street: address.street,
          city: address.city,
          zipCode: address.zipCode,
          state: address.state,
          slug: address.slug,
          closePrice,
          onMarketDateTime: onMarketDateTime
            ? onMarketDateTime.toString()
            : null,
          offMarketDateTime: offMarketDateTime
            ? offMarketDateTime.toString()
            : null,
          listPrice,
          mlsId,
          image: images && images[0] ? images[0].url : null,
          lat,
          lng,
        };
      }
    );

    return agentListings;
  } catch (error) {
    console.log(`Error @ getAgentListings: ${error.message}`);
    return null;
  }
};
