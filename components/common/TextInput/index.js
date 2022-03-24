import { makeStyles, TextField } from '@material-ui/core';

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

const TextInput = props => {
  const classes = useStyles();
  return (
    <TextField
      {...props}
      className={classes.root}
      error={!!props.error}
      id="standard-basic"
      color="primary"
      fullWidth={true}
      helperText={props.error || props.message}
    />
  );
};

export default TextInput;
