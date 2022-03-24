const moment = require('moment');

const filterLocationSlugs = [
  'nashville',
  'clarksville',
  'murfreesboro',
  'franklin',
  'lebanon',
  'spring-hill',
  'mount-juliet',
  'hendersonville',
  'gallatin',
  'smyrna',
  'columbia',
  'brentwood',
  'thompsons-station',
  'nolensville',
  'la-vergne',
  'goodlettsville',
  'white-house',
  'chapel-hill',
  'college-grove',
  'arrington',
  'kingston-springs',
];

const listingFilters = [
  {
    name: 'Luxury Homes',
    slug: 'luxury-homes',
  },
  {
    name: 'Cheap Homes',
    slug: 'cheap-homes',
  },
  {
    name: 'Waterfront Homes',
    slug: 'waterfront-homes',
  },
  {
    name: 'Townhouses',
    slug: 'townhouses',
  },
  {
    name: 'Condos',
    slug: 'condos',
  },
  {
    name: 'Single Story Homes',
    slug: 'single-story-homes',
  },
  {
    name: 'New Construction Homes',
    slug: 'new-construction-homes',
  },
  {
    name: 'Historic Homes',
    slug: 'historic-homes',
  },
  {
    name: '55+ Community Homes',
    slug: 'senior-community-homes',
  },
  {
    name: 'Homes For Sale with Swimming Pool',
    slug: 'homes-with-swimming-pool',
  },
  {
    name: `Homes Listed On ${moment().format('MM/DD/YY')}`,
    slug: 'new-listings',
  },
];

const getFilterInfo = (filterSlug, location) => {
  switch (filterSlug) {
    // luxury-homes
    case listingFilters[0].slug:
      return {
        name: listingFilters[0].name,
        canonical: `https://www.felixhomes.com/homes-for-sale/city/${location.state.slug}/${location.slug}/${filterSlug}`,
        title: `${location.name}, TN Luxury Homes, Mansions & High End Real Estate For Sale | felix`,
        description: `See luxury homes, mansions & high end ${location.name} homes for sale. View listing photos, property details, and prices for houses in ${location.name}, TN.`,
      };
    // cheap-homes
    case listingFilters[1].slug:
      return {
        name: listingFilters[1].name,
        canonical: `https://www.felixhomes.com/homes-for-sale/city/${location.state.slug}/${location.slug}/${filterSlug}`,
        title: `${location.name}, TN Cheap Homes, Starter Properties & Inexpensive Real Estate For Sale | felix`,
        description: `See cheap homes, starter properties & inexpensive ${location.name} homes for sale. View listing photos, property details, and prices for houses in ${location.name}, TN.`,
      };
    // waterfront-homes
    case listingFilters[2].slug:
      return {
        name: listingFilters[2].name,
        canonical: `https://www.felixhomes.com/homes-for-sale/city/${location.state.slug}/${location.slug}/${filterSlug}`,
        title: `${location.name}, TN Waterfront Homes, Properties & Real Estate For Sale | felix`,
        description: `See waterfront homes, properties & real estate in ${location.name}. View listing photos, property details, and prices for houses in ${location.name}, TN`,
      };
    // townhouses
    case listingFilters[3].slug:
      return {
        name: listingFilters[3].name,
        canonical: `https://www.felixhomes.com/homes-for-sale/city/${location.state.slug}/${location.slug}/${filterSlug}`,
        title: `${location.name}, TN Townhouses & Real Estate For Sale | felix`,
        description: `See townhouses in ${location.name} for sale. View listing photos, property details, and prices for townhouses in ${location.name}, TN.`,
      };
    // condos
    case listingFilters[4].slug:
      return {
        name: listingFilters[4].name,
        canonical: `https://www.felixhomes.com/homes-for-sale/city/${location.state.slug}/${location.slug}/${filterSlug}`,
        title: `${location.name}, TN Condos & Real Estate For Sale | felix`,
        description: `See condos in ${location.name} for sale. View listing photos, property details, and prices for condominiums in ${location.name}, TN.`,
      };
    // single-story-homes
    case listingFilters[5].slug:
      return {
        name: listingFilters[5].name,
        canonical: `https://www.felixhomes.com/homes-for-sale/city/${location.state.slug}/${location.slug}/${filterSlug}`,
        title: `${location.name}, TN Single Story & One Story Homes For Sale | felix`,
        description: `See single story homes for sale in ${location.name}. View listing photos, property details, and prices for one story real estate in ${location.name}, TN.`,
      };
    // new-construction-homes
    case listingFilters[6].slug:
      return {
        name: listingFilters[6].name,
        canonical: `https://www.felixhomes.com/homes-for-sale/city/${location.state.slug}/${location.slug}/${filterSlug}`,
        title: `${location.name}, TN New Construction Homes, Condos & Real Estate For Sale | felix`,
        description: `See new construction homes for sale in ${location.name}. View listing photos, property details, and prices for new construction real estate in ${location.name}, TN.`,
      };
    // historic-homes
    case listingFilters[7].slug:
      return {
        name: listingFilters[7].name,
        canonical: `https://www.felixhomes.com/homes-for-sale/city/${location.state.slug}/${location.slug}/${filterSlug}`,
        title: `${location.name}, TN Historic Homes & Real Estate For Sale | felix`,
        description: `See historic homes for sale in ${location.name}. View listing photos, property details, and prices for historic real estate in ${location.name}, TN.`,
      };
    // senior-community-homes
    case listingFilters[8].slug:
      return {
        name: listingFilters[8].name,
        canonical: `https://www.felixhomes.com/homes-for-sale/city/${location.state.slug}/${location.slug}/${filterSlug}`,
        title: `${location.name}, TN 55 Plus Homes, Listings & Real Estate For Sale | felix`,
        description: `See 55+ community homes for sale in ${location.name}. View listing photos, property details, and prices for senior community real estate in ${location.name}, TN.`,
      };
    // homes-with-swimming-pool
    case listingFilters[9].slug:
      return {
        name: listingFilters[9].name,
        canonical: `https://www.felixhomes.com/homes-for-sale/city/${location.state.slug}/${location.slug}/${filterSlug}`,
        title: `${location.name}, TN Home & Real Estate with Swimming Pool For Sale | felix`,
        description: `See homes with a swimming pool for sale in ${location.name}. View listing photos, property details, and prices for houses with a swimming pool in ${location.name}, TN.`,
      };
    // new-listings
    case listingFilters[10].slug:
      return {
        name: listingFilters[10].name,
        canonical: `https://www.felixhomes.com/homes-for-sale/city/${location.state.slug}/${location.slug}/${filterSlug}`,
        title: `${location.name}, TN New Listings & Real Estate Listed on [Today's Date] | felix`,
        description: `See today's listings & homes for sale in ${location.name}. View listing photos, property details, and prices for [Today's Date] real estate in ${location.name}, TN.`,
      };

    default:
      return {
        name: 'Homes For Sale',
        canonical: `https://www.felixhomes.com/homes-for-sale/city/${location.state.slug}/${location.slug}/${filterSlug}`,
        title: `${location.name}, TN Homes For Sale and Real Estate | felix`,
        description: `See the newest ${location.name} homes for sale and real estate listings. View listing photos, property details, and prices for houses in ${location.name}, TN.`,
      };
  }
};

const isFilterLocation = slug => {
  return filterLocationSlugs.find(location => location === slug);
};

module.exports = {
  getFilterInfo,
  filterLocationSlugs,
  listingFilters,
  isFilterLocation,
};
