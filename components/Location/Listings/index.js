import ForSale from 'components/HomesForSale';
import Section from '../common/Section';
import { Home } from '@styled-icons/boxicons-solid';

const Listings = ({ listingsData, geo, location }) => {
  if (listingsData?.total === 0) {
    return null;
  }

  return (
    <Section
      icon={<Home size={32} />}
      heading={`Homes for sale in ${location.name}`}
      container
    >
      <ForSale
        ssrListingsData={listingsData}
        geo={geo}
        location={location}
        isLocationPage={true}
      />
    </Section>
  );
};

export default Listings;
