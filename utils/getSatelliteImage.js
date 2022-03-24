const getSatelliteImage = (lat, lng, size) => {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=18&size=${size}&maptype=satellite&key=AIzaSyCmlIj5snp4jbVlm7wedy8i-IPLM1NXvlQ`;
};

module.exports = getSatelliteImage;
