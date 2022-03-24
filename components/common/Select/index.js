import {
  Select as MuiSelect,
  MenuItem,
  InputLabel,
  FormControl,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 3,
    '& .MuiInputBase-root': {
      marginTop: 0,
    },

    '& .MuiInputLabel-formControl': {
      fontSize: theme.text.m,
      color: theme.palette.black_40,
      fontWeight: 200,
      transform: `translate(0, 6px) `,
    },
    '& .MuiInputLabel-shrink': {
      [theme?.breakpoints.up('desktop')]: {
        transform: `translate(0, -16px) scale(0.75)`,
        color: theme.palette.back_20,
      },
      [theme?.breakpoints?.up('mobile')]: {
        transform: `translate(0, -8px) scale(.8)`,
      },
    },

    '& .MuiSelect-root': {
      fontSize: theme.text.m,
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
    '& .MuiInput-underline': {
      '&:before': {
        borderBottom: `2px solid ${theme.palette.black_20}`,
      },
      '&:after': {
        borderBottom: `2px solid ${theme.palette.blue_100}`,
        transition: 'none',
      },
      '&.Mui-error:after': {
        borderBottomColor: '#f44336',
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

const Select = props => {
  const classes = useStyles();

  return (
    <FormControl fullWidth className={classes.root} error={props.error}>
      <InputLabel id="category">{props.label}</InputLabel>
      <MuiSelect
        labelId="category"
        value={props.value}
        onChange={props.onChange}
      >
        {props.menuItems.map(item => (
          <MenuItem key={item.label} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
