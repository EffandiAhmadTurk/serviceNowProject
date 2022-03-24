import { getListings } from 'controllers/listing';
import {
  getLocation,
  getNearbyLocations,
  getLocationContent,
  getLocationPaths,
} from 'controllers/location';
import PageLayout from 'layouts/PageLayout';
import Location from 'components/Location';

import Page404 from 'pages/404';

const LocationPage = ({ listingsData, total, geo, location, notFound }) => {
  if (notFound) return <Page404 />;

  return (
    <PageLayout
      canonical={`https://www.felixhomes.com${location.path}`}
      title={`${location.name}, TN Homes For Sale and Real Estate | felix`}
      description={`See the latest ${location.name} homes for sale and real estate listings. View listing photos, property details, and prices for houses in ${location.name}, TN.`}
      withContainer
      navVariant="content"
      isNavTransparent
    >
      <Location
        listingsData={listingsData}
        total={total}
        geo={geo}
        location={location}
      />
    </PageLayout>
  );
};

export async function getStaticProps({ params }) {
  const { cityZipCodeCounty } = params;

  const location = await getLocation({
    slug: cityZipCodeCounty,
    withGeo: false,
  });

  if (!location) {
    return {
      notFound: true,
    };
  }
  // Listings
  const searchParams = {
    locations: cityZipCodeCounty,
    limit: 24,
  };

  const listingsData = await getListings(searchParams);
  const geo = {
    lat: location.lat || null,
    lng: location.lng || null,
  };

  // Content
  location.content = await getLocationContent(cityZipCodeCounty);
  location.nearbyLocations = await getNearbyLocations(
    location.center,
    50000,
    location.type
  );

  return {
    props: {
      listingsData,
      geo: geo,
      location,
    },
  };
}

export async function getStaticPaths() {
  const locations = await getLocationPaths(['City', 'Zip Code', 'County']);
  const paths = locations.map(({ slug, typeSlug, stateSlug }) => ({
    params: {
      type: typeSlug,
      state: stateSlug,
      cityZipCodeCounty: slug,
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
}

export default LocationPage;
