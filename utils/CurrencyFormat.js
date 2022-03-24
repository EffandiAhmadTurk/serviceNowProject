import React from 'react';
import NumberFormat from 'react-number-format';

const CurrencyFormat = ({ value, className, na }) => {
  if (na && !value) return 'N/A';

  return (
    <NumberFormat
      className={className}
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
      decimalScale={0}
    />
  );
};

export default CurrencyFormat;
