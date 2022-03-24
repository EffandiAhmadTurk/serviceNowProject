const currencyFormater = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  currency: 'USD',
});

export default currencyFormater;
