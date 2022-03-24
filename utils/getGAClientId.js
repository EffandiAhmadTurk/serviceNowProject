import ReactGA from 'react-ga';
ReactGA.initialize('UA-117338591-1');

const getGAClientId = () => {
  return new Promise((resolve, reject) => {
    ReactGA.ga(tracker => {
      const clientId = tracker.get('clientId');
      if (clientId) {
        resolve(clientId);
      } else {
        reject(null);
      }
    });
  });
};

export default getGAClientId;
