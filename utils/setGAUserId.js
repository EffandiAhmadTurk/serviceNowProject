import ReactGA from 'react-ga';
ReactGA.initialize('UA-117338591-1');

const setGAUserId = userId => {
  ReactGA.set({ userId });
};

export default setGAUserId;
