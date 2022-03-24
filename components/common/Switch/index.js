import {
  Switch as MuiSwitch,
  FormControlLabel,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  switch: {
    '& .MuiSwitch-colorSecondary': {
      '&.Mui-checked': {
        color: theme.palette.blue_100,
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },

    '& .MuiIconButton-root': {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },

    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      border: `1px solid ${theme.palette.black_10}`,
    },
    '& .Mui-checked + .MuiSwitch-track': {
      backgroundColor: theme.palette.blue_80,
    },
  },
}));

const Switch = props => {
  const classes = useStyles();
  return (
    <FormControlLabel
      style={{ marginRight: 0 }}
      control={
        <MuiSwitch
          disableRipple
          className={classes.switch}
          {...props}
          sx={{ m: 1 }}
        />
      }
    />
  );
};

export default Switch;
