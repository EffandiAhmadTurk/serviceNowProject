const capitalize = string => {
  if (typeof string === 'string') {
    const stringCapitalized = string.charAt(0).toUpperCase() + string.slice(1);
    return stringCapitalized;
  }
  return string;
};

module.exports = capitalize;
