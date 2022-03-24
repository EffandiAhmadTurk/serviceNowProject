import React from 'react';
import NumberFormat from 'react-number-format';

export const SquareFootage = ({ value }) => (
  <NumberFormat
    value={value}
    displayType={'text'}
    thousandSeparator={true}
    suffix={' sqft'}
  />
);
