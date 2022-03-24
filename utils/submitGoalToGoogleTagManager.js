import TagManager from 'react-gtm-module';

const submitGoalToGoogleTagManager = ({
  event,
  source,
  type,
  ecommerce,
  clientId,
  filters,
}) => {
  const tagManagerArgs = {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    dataLayer: {
      event,
      source,
      type,
      ecommerce,
      cid: clientId,
      filters,
    },
  };

  TagManager.initialize(tagManagerArgs);
};

export default submitGoalToGoogleTagManager;
