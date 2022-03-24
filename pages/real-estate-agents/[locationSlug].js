import { getLocation } from '../../controllers/location';
import { getAgents } from '../../controllers/agent';

import Page410 from '../410';

// DO NOT REMOVE -- Google still knows about these pages and we need indicate that they have moved

const RealEstateAgentsPage = ({}) => {
  return <Page410 />;
};

export async function getServerSideProps({ params }) {
  const { locationSlug } = params;

  const location = await getLocation({ slug: locationSlug });

  if (!location) {
    return {
      notFound: true,
    };
  }

  const { agents, total } = await getAgents(locationSlug);

  const topAgents = agents.slice(0, 10);

  const totalTopAgents = topAgents.length;

  return {
    props: {
      location,
      topAgents: topAgents,
      agents,
      totalTopAgents,
      totalAgents: total,
    },
  };
}

export default RealEstateAgentsPage;
