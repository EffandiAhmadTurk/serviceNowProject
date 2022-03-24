import { getAgent } from '../../../controllers/agent';
import { getAgentListings } from '../../../controllers/listing';
import Page410 from '../../410';

// DO NOT REMOVE -- Google still knows about these pages and we need indicate that they have moved

const RealEstateAgentPage = ({}) => {
  return <Page410 />;
};

export async function getServerSideProps({ params }) {
  const { mlsId } = params;

  const agent = await getAgent(mlsId);

  if (!agent) {
    return {
      notFound: true,
    };
  }
  const listings = await getAgentListings(mlsId);

  const activeListings =
    listings?.filter(listing => listing.status === 'Active') || null;

  const closedListings =
    listings?.filter(listing => listing.status === 'Closed') || null;

  return {
    props: {
      agent,
      activeListings: activeListings,
      closedListings: closedListings,
    },
  };
}

export default RealEstateAgentPage;
