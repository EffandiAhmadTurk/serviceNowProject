import NumberFormat from 'react-number-format';

const FormatedNumber = ({ value, suffix, ...props }) => (
  <NumberFormat
    value={value}
    displayType={'text'}
    suffix={suffix}
    thousandSeparator
    decimalScale={2}
    {...props}
  />
);

export default FormatedNumber;
