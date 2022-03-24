import NumberFormat from 'react-number-format';
import CurrencyFormat from './CurrencyFormat';

const isNullOrUndefined = value => {
  // null == undefined is true
  return value == null;
};

const PriceFormat = ({ value }) => (
  <NumberFormat
    prefix="$"
    displayType="text"
    thousandSeparator
    fixedDecimalScale
    decimalScale={0}
    value={value}
  />
);

export { CurrencyFormat, isNullOrUndefined, PriceFormat };
