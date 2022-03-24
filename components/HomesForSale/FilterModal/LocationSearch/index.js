import { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, Popper } from '@material-ui/core';
import fetchLocationSuggestions from '../../../../utils/fetchLocationSuggestion';
import { makeStyles } from '@material-ui/styles';
import { Close as CloseIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  autoComplete: {
    width: '100%',
    [theme.breakpoints.down(810)]: {
      marginTop: -10,
    },
  },
  input: {
    fontSize: theme.text.xl,
    fontWeight: 200,
    minWidth: 400,
    maxWidth: 600,
    [theme.breakpoints.down(810)]: {
      fontSize: theme.text.m,
      minWidth: '100%',
      maxWidth: 300,
    },
    '& .MuiAutocomplete-input': {
      fontSize: theme.text.xl,
      color: theme.palette.black_80,
      paddingBottom: `${theme.space.xxs} !important`,
      [theme.breakpoints.down(810)]: {
        fontSize: theme.text.m,
      },
    },
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
  },
  chip: {
    backgroundColor: theme.palette.blue_10,
    color: theme.palette.blue_100,
    fontSize: theme.text.l,
    fontWeight: 200,
    marginRight: theme.space.xxs,
    marginBottom: theme.space.xxs,
    '& span': {
      paddingTop: 1,
    },
    '& svg': {
      paddingTop: 2,
    },
    [theme.breakpoints.down(810)]: {
      fontSize: theme.text.s,
    },
  },
  deleteIcon: {
    color: theme.palette.blue_100,
    width: 16,
    transition: 'all 0.2s',
    '&:hover': {
      color: theme.palette.blue_80,
      opacity: 0.5,
      transition: 'all 0.2s',
    },
  },
  menuItem: {
    padding: 0,
    fontSize: theme.text.m,
    fontWeight: 200,
  },
  popper: {
    zIndex: 10000,
    color: theme.palette.black_100,
    '& .MuiAutocomplete-listbox': {
      '& :hover': {
        backgroundColor: theme.palette.blue_10,
      },
      // TODO: Not working
      '& $selected': {
        backgroundColor: theme.palette.blue_10,
      },
    },
  },
}));

const LocationSearch = ({ setValue, value }) => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const {
    input,
    chip,
    deleteIcon,
    autoComplete,
    menuItem,
    popper,
  } = useStyles();

  const handleSelectLocation = (e, newLocations) => {
    const cleanLocations = newLocations.map(({ slug, name }) => ({
      name,
      slug,
    }));
    setValue(cleanLocations);
  };

  const handleInputChange = async e => {
    const { value } = e.target;

    fetchLocationSuggestions(value, locations => {
      if (value) {
        setOptions(locations);
      } else {
        setOptions([]);
      }
    });

    setInputValue(value);
  };

  const CustomPopper = function (props) {
    return <Popper {...props} className={popper} placement="bottom" />;
  };

  return (
    <Autocomplete
      className={autoComplete}
      multiple
      options={options}
      getOptionLabel={option => option.name}
      noOptionsText="Loading..."
      freeSolo
      classes={{
        inputRoot: input,
      }}
      ChipProps={{
        className: chip,
        deleteIcon: <CloseIcon className={deleteIcon} fontSize="small" />,
      }}
      onChange={handleSelectLocation}
      getOptionSelected={(option, location) => option.name === location.name}
      value={value}
      PopperComponent={CustomPopper}
      renderOption={option => <span className={menuItem}>{option.name}</span>}
      renderInput={params => (
        <TextField
          {...params}
          className={input}
          value={inputValue}
          onChange={handleInputChange}
          variant="standard"
          placeholder={
            value.length > 0 ? 'Select...' : 'Select City, Zip or Neighborhood'
          }
        />
      )}
    />
  );
};

export default LocationSearch;
