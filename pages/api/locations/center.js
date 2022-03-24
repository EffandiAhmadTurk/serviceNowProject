const { getLocationsCenterPoints } = require('../../../controllers/location');
const Turf = require('@turf/turf');

export default async (req, res) => {
  try {
    const { 'locationSlugs[]': locationSlugs } = req.query;

    if (locationSlugs?.length) {
      const locationsCenterPoints = await getLocationsCenterPoints(
        locationSlugs
      );

      const points = Turf.points(locationsCenterPoints);

      const {
        geometry: { coordinates },
      } = Turf.center(points);

      const centerPoints = {
        lat: coordinates[1],
        lng: coordinates[0],
      };

      return res.status(200).json(centerPoints);
    }

    return res.status(400).json(null);
  } catch (error) {
    return res.status(400);
  }
};
