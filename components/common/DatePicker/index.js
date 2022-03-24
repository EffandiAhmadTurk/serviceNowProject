import { KeyboardDatePicker } from '@material-ui/pickers';
import { FormControl, makeStyles } from '@material-ui/core';

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
    '&.MuiFormControl-marginNormal': {
      margin: 0,
    },
    '& .MuiInput-formControl': {
      marginTop: 0,
    },
    '& .MuiInputLabel-formControl': {
      transform: 'translate(0, 12px) scale(0.8)',
    },
    '& .MuiInputLabel-shrink': {
      [theme.breakpoints.up('desktop')]: {
        fontWeight: 100,
        transform: `translate(0, -10px) scale(0.65)`,
        color: theme.palette.back_20,
      },
      [theme.breakpoints.up('mobile')]: {
        transform: `translate(0, -8px) scale(0.8)`,
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

const DatePicker = ({ value, onChange }) => {
  const classes = useStyles();
  return (
    <FormControl fullWidth className={classes.root}>
      <KeyboardDatePicker
        className={classes.root}
        name="date"
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Select a day"
        value={value}
        onChange={onChange}
        helperText={''}
        autoOk
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </FormControl>
  );
};

export default DatePicker;
