// Create random index between 0 and 7
const randomIdx = Math.floor(Math.random() * 8);
const addAdTilePlaceholder = listings => {
  const listingsWithAd = [...listings];

  const adTile = { adTile: true };
  listingsWithAd.splice(randomIdx, 0, adTile);

  return listingsWithAd;
};

export default addAdTilePlaceholder;
