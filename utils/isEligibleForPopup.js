const isEligibleForPopup = audience => {
  const popupDate = localStorage.getItem(`${audience}AdPopup`);
  const today = new Date();
  return popupDate < today;
};

export default isEligibleForPopup;
