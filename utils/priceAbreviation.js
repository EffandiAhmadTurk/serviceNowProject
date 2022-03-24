const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const priceAbreviation = price => {
  const isPriceMil = price >= 1000000;

  const priceDivider = isPriceMil ? 1000000 : 1000;

  const priceRounded = isPriceMil
    ? price / priceDivider
    : Math.floor(price / priceDivider);

  const displayPrice = formatter.format(priceRounded).replace(/\D00$/, '');
  const priceSuffix = isPriceMil ? 'mil' : 'k';

  return `${displayPrice}${priceSuffix}`;
};

export default priceAbreviation;
