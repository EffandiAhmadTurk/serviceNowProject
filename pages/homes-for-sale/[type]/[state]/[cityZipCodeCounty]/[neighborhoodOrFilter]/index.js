import { getListings } from 'controllers/listing';
import {
  getLocation,
  getLocationContent,
  getNearbyLocations,
  getLocationPaths,
} from 'controllers/location';
import ForSale from 'components/HomesForSale';
import Page404 from 'pages/404';
import PageLayout from 'layouts/PageLayout';
import Location from 'components/Location';
import {
  getFilterInfo,
  listingFilters,
  isFilterLocation,
  filterLocationSlugs,
} from 'utils/listingFilterUtils';

const LocationPage = ({
  listings,
  total,
  geo,
  location,
  notFound,
  filterSlug,
  listingsData,
}) => {
  if (notFound) return <Page404 />;

  if (filterSlug) {
    const { canonical, description, title } = getFilterInfo(
      filterSlug,
      location
    );

    return (
      <PageLayout
        canonical={canonical}
        title={title}
        description={description}
        isNavTransparent={false}
      >
        <ForSale ssrListingsData={listingsData} geo={geo} location={location} />
      </PageLayout>
    );
  }

  return (
    <PageLayout
      canonical={`https://www.felixhomes.com${location.path}`}
      title={`${location.name}, TN Homes For Sale and Real Estate | felix`}
      description={`See the newest ${location.name} homes for sale and real estate listings. View listing photos, property details, and prices for houses in ${location.name}, TN.`}
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
  const { type, cityZipCodeCounty, neighborhoodOrFilter } = params;

  const isNeighborhood = type === 'neighborhood';
  const isFilter = type === 'city';

  let location = null;
  let listingsData = {};

  if (isNeighborhood) {
    const neighborhood = neighborhoodOrFilter;
    const locationParams = {
      slug: neighborhoodOrFilter,
      withGeo: false,
    };
    location = await getLocation(locationParams);

    if (location) {
      location.content = await getLocationContent(neighborhoodOrFilter);
      location.nearbyLocations = await getNearbyLocations(
        location.center,
        16093.4,
        location.type
      );

      const searchParams = {
        locations: neighborhood,
        limit: 24,
      };
      listingsData = await getListings(searchParams);
    }
  }

  let filterSlug = null;
  if (isFilter) {
    const city = cityZipCodeCounty;
    filterSlug = neighborhoodOrFilter;

    // Check if a valid filter has been provided
    const isFilterSlug = listingFilters.find(
      filter => filter.slug === neighborhoodOrFilter
    );
    const locationParams = {
      slug: city,
      withGeo: false,
    };

    location = await getLocation(locationParams);

    // If not a location, valid filter or filterable location, send to 404
    if (!location || !isFilterSlug || !isFilterLocation(cityZipCodeCounty)) {
      return {
        notFound: true,
      };
    }

    if (location) {
      const searchParams = {
        locations: city,
        filter: filterSlug,
        limit: 24,
      };
      listingsData = await getListings(searchParams);
    }
  }

  if (!location) {
    return {
      notFound: true,
    };
  }

  const geo = {
    lat: location.lat || null,
    lng: location.lng || null,
  };
  return {
    props: {
      listingsData,
      geo: geo,
      location,
      filterSlug,
    },
  };
}

export async function getStaticPaths() {
  const neighborhoods = await getLocationPaths('Neighborhood');

  const neighborhoodPaths = neighborhoods.map(
    ({ slug, typeSlug, stateSlug, citySlug }) => ({
      params: {
        type: typeSlug,
        state: stateSlug,
        cityZipCodeCounty: citySlug,
        neighborhoodOrFilter: slug,
      },
    })
  );

  const filterPaths = [];
  filterLocationSlugs.forEach(citySlug => {
    listingFilters.forEach(filter => {
      const obj = {
        params: {
          type: 'city',
          state: 'tn',
          cityZipCodeCounty: citySlug,
          neighborhoodOrFilter: filter.slug,
        },
      };
      filterPaths.push(obj);
    });
  });

  const paths = [...neighborhoodPaths, ...filterPaths];

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
}

export default LocationPage;
