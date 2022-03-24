import { Pagination as MuiPagination } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  pagination: {
    '& .MuiPaginationItem-page': {
      fontFamily: 'CircularStd, sans-serif',
      fontWeight: 100,

      '&:hover': {
        backgroundColor: theme.palette.blue_10,
        color: theme.palette.black_100,
      },
    },

    '& .MuiPaginationItem-page.Mui-selected': {
      backgroundColor: theme.palette.black_100,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.palette.black_80,
        color: 'white',
      },
    },
  },
}));

const Pagination = ({ ...props }) => {
  const classes = useStyles();
  return <MuiPagination {...props} className={classes.pagination} />;
};

export default Pagination;
