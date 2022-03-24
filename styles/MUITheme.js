import { createMuiTheme } from '@material-ui/core/styles';

const globalTheme = createMuiTheme({
  palette: {
    royal_blue: '#4c88f8',
    royal_blue_hover: '#3378f7',
    mint: '#39c2aa',
    mint_hover: '#33ae99',
    navy: '#072967',
    dark_navy: '#021e41',
    yellow: '#ffd463',
    highlight: '#ffeab9',
    light_blue: '#f2f6fe',
    dark_blue: '#1c315a',
    coral: '#f36966',
    error_red: '#ff5a5a',
    beige: '#f9f4f2',
    rose: '#fcdfe1',

    // Greys
    grey_1: '#e7eaf0',
    grey_2: '#cdd4e1',
    grey_3: '#b5bfd2',
    grey_4: '#9ca9c2',
    grey_5: '#8394b3',

    // Colors
    // Primary
    blue_100: '#5577f2',
    blue_80: '#7793f5',
    blue_60: '#99aef7',
    blue_40: '#bbc9fa',
    blue_20: '#dde4fc',
    blue_10: '#eef1fe',
    // Secondary
    sienna_100: '#ee6c4d',
    sienna_80: '#f18971',
    sienna_60: '#f5a794',
    sienna_40: '#f8c4b8',
    sienna_20: '#fce2db',
    sienna_10: '#fdf0ed',
    // Typography
    black_100: '#233759',
    black_80: '#4f5f7a',
    black_60: '#7b879c',
    black_40: '#a7afbd',
    black_20: '#d3d7de',
    black_10: '#e9ebee',
    // Background
    grey_100: '#f7f9fc',
    grey_80: '#f9fafd',
    grey_60: '#fafbfd',
    grey_40: '#fcfdfe',
    grey_20: '#fdfefe',
    grey_10: '#fefeff',
    // Supporting 1
    yellow_100: '#ffcd59',
    yellow_80: '#ffd77a',
    yellow_60: '#ffe19b',
    yellow_40: '#ffebbd',
    yellow_20: '#fff5de',
    yellow_10: '#fffaee',
    // Supporting 2
    green_100: '#6ecb63',
    green_80: '#8bd582',
    green_60: '#a8e0a1',
    green_40: '#c5eac1',
    green_20: '#e2f5e0',
    green_10: '#f1faef',
    // Supporting 3
    silver_100: '#c8ceda',
    silver_80: '#d3d8e1',
    silver_60: '#dee2e9',
    silver_40: '#e9ebf0',
    silver_20: '#f4f5f8',
    silver_10: '#fafafb',
  },
  space: {
    // xxs 4px
    xxs: 'calc(0.25 * 16px)',
    // xs 8px
    xs: 'calc(0.5 * 16px)',
    // s 12px
    s: 'calc(0.75 * 16px)',
    // m 20px
    m: 'calc(1.25 * 16px)',
    // l 20px
    l: 'calc(2 * 16px)',
    // xl 52px
    xl: 'calc(3.25 * 16px)',
    // xxl 84px
    xxl: 'calc(5.25 * 16px)',
  },
  text: {
    xxxxxl: 'calc(1rem * 3)',
    xxxxl: 'calc(1rem * 2.25)',
    xxxl: 'calc(1rem * 1.75)',
    xxl: 'calc(1rem * 1.5)',
    xl: 'calc(1rem * 1.25)',
    l: 'calc(1rem * 1.125)',
    m: 'calc(1rem)',
    s: 'calc(1rem * 0.875)',
    xs: 'calc(1rem * 0.75)',
  },
  typography: {
    fontFamily: `CircularStd,  sans-serif`,
    fontWeightLight: 100,
    fontWeightBook: 200,
    fontWeightMedium: 300,
    fontWeightBold: 400,
    fontWeightBlack: 500,
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 480,
      desktop: 810,
    },
  },
});

const theme = createMuiTheme(
  {
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
    overrides: {
      MuiPaper: {
        rounded: {
          borderRadius: 0,
        },
        elevation8: {
          boxShadow: 'none',
        },
        elevation24: {
          boxShadow: 'none',
        },
      },
      MuiList: {
        fontWeight: 200,
        root: {
          border: `1px solid ${globalTheme.palette.blue_10}`,
        },
      },
      MuiListItem: {
        button: {
          '&:hover': {
            backgroundColor: globalTheme.palette.blue_10,
          },
          '&$selected': {
            '&:hover': {
              backgroundColor: globalTheme.palette.blue_10,
            },
          },
        },
      },

      MuiBackdrop: {
        root: {
          backgroundColor: 'rgb(242, 246, 254, 0.8)',
        },
      },

      MuiMenuItem: {
        root: {
          fontWeight: 200,
          fontSize: globalTheme.text.m,
          color: globalTheme.palette.black_100,
          fontFamily: 'CircularStd, sans-serif',
          '&$selected': {
            backgroundColor: globalTheme.palette.blue_10,
          },
        },
      },
      MuiCircularProgress: {
        colorPrimary: {
          color: globalTheme.palette.blue_100,
        },
      },
      MuiButton: {
        root: {
          textTransform: 'none',
          fontSize: 13,
          fontFamily: 'CircularStd, sans-serif',
          fontWeight: 'normal',
          borderRadius: 0,
        },
        outlined: {
          border: `1px solid ${globalTheme.palette.grey_2}`,
        },
      },
      MuiTooltip: {
        popper: {
          fontFamily: 'CircularStd, sans-serif',
        },
      },

      MuiInputBase: {
        input: {
          fontFamily: 'CircularStd, sans-serif',
          color: globalTheme.palette.black_100,
        },
      },

      // Date Picker
      MuiPickersDay: {
        day: {
          fontFamily: 'CircularStd, sans-serif',
          fontSize: globalTheme.text.s,
          fontWeight: 100,
          color: globalTheme.palette.black_80,
        },

        current: {
          backgroundColor: globalTheme.palette.black_100,
          color: 'white',
        },
        daySelected: {
          backgroundColor: globalTheme.palette.blue_100,
          color: 'white',
          '&:hover': {
            backgroundColor: globalTheme.palette.blue_80,
          },
        },
      },

      MuiFormLabel: {
        root: {
          color: globalTheme.palette.black_40,
          fontWeight: 200,
          fontSize: globalTheme.text.m,
          '&$focused': {
            color: globalTheme.palette.royal_blue,
          },
        },
      },

      MuiSelect: {
        root: {
          fontWeight: 300,
        },
      },
      MuiRating: {
        root: {
          color: globalTheme.palette.yellow_100,
        },
      },
      MuiTab: {
        wrapper: {
          textTransform: 'none',
          fontWeight: 200,
          fontSize: globalTheme.text.m,
        },
      },
      MuiFormHelperText: {
        root: {
          fontWeight: globalTheme.typography.fontWeightLight,
        },
      },
    },
  },
  globalTheme
);

export default theme;
