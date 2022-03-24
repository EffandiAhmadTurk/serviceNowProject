import { Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  select: {
    marginRight: theme.space.xs,
    marginTop: 11,
    '&.MuiInput-underline': {
      '&:before': {
        borderBottom: `2px solid ${theme.palette.black_100}`,
      },
      '&:after': {
        borderBottom: `2px solid ${theme.palette.blue_100}`,
      },
      '&:hover': {
        '&:not(.Mui-disabled)': {
          '&:before': {
            borderBottom: `2px solid ${theme.palette.blue_100}`,
          },
        },
      },
    },

    '& .MuiSelect-icon': {
      display: 'none',
    },
    '& .MuiSelect-select': {
      paddingRight: 0,
      fontWeight: 300,
      backgroundColor: 'white',
      fontSize: theme.text.xxl,
      [theme.breakpoints.down(810)]: {
        fontSize: theme.text.m,
      },
      [theme.breakpoints.down(480)]: {
        fontSize: theme.text.m,
        fontWeight: 200,
        paddingBottom: 3,
      },
    },

    '& .MuiInputBase-root': {
      lineHeight: 'inherit',
    },
    '&  .MuiInputBase-input': {
      padding: 0,
    },
    [theme.breakpoints.down(810)]: {
      fontSize: theme.text.m,
      marginRight: theme.space.xs,
      marginTop: -9,
    },
    [theme.breakpoints.down(480)]: {
      marginBottom: 0,
    },
  },
  menuItem: {
    fontSize: theme.text.m,
    color: theme.palette.black_100,
    fontWeight: 200,
  },
}));

const FilterSelect = ({ value, options, setValue, minWidth }) => {
  const { menuItem, select } = useStyles();

  return (
    <Select
      style={{
        minWidth,
      }}
      value={!value ? 0 : value}
      className={select}
      onChange={({ target }) => {
        // These values end up in the url and need therefore be ajusted to work with http requests
        const value = target.value === 0 ? '' : target.value;
        setValue(value);
      }}
    >
      {options.map(option => {
        return (
          <MenuItem className={menuItem} key={option[0]} value={option[0]}>
            {option[1]}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default FilterSelect;
