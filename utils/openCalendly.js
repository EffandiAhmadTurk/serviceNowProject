const useCalendly = (eventType) => {
  let url;
  switch (eventType) {
    case 'cma':
      url = 'https://calendly.com/felixhomes/felix-homes-request-cma';
      break;
    case 'coffee':
      url = 'https://calendly.com/felixhomes/lets-grab-coffee';
      break;
    default:
      url = 'https://calendly.com/felixhomes/felix-homes-request-cma';
  }
  window.Calendly.initPopupWidget({
    url,
  });
};

export default useCalendly;
