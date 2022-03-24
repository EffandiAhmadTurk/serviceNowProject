import { TextField, makeStyles } from '@material-ui/core';
import { forwardRef } from 'react';
import PhoneNumberInput from 'react-phone-number-input';

const phoneInput = forwardRef((props, ref) => {
  return <TextField {...props} inputRef={ref} fullWidth name="phone" />;
});

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiInput-input': {
      color: theme.palette.black_100,
      fontWeight: 200,
      paddingTop: theme.space.xs,
      paddingBottom: theme.space.xs,
      '&::placeholder': {
        color: theme.palette.black_100,
        fontWeight: 200,
      },
    },
    '& .MuiInput-underline': {
      '&:before': {
        borderBottom: `2px solid ${theme.palette.black_20}`,
      },
      '&:after': {
        borderBottom: `2px solid ${theme.palette.blue_100}`,
        transition: 'none',
      },
      '&:hover': {
        '&:not(.Mui-disabled)': {
          '&:before': {
            borderBottom: `2px solid ${theme.palette.blue_100}`,
          },
        },
      },
    },
  },
}));

const PhoneInput = props => {
  const classes = useStyles();
  return (
    <PhoneNumberInput
      className={classes.root}
      {...props}
      fullWidth={true}
      color="primary"
      id="standard-basic"
      error={!!props.error}
      helperText={props.error}
      value={props.value}
      inputComponent={phoneInput}
      country="US"
      defaultCountry="US"
    />
  );
};

export default PhoneInput;
