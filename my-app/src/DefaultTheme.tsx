import {createMuiTheme} from '@material-ui/core'

export const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        color: 'white',
      },
    },
    MuiDrawer: {
      paperAnchorTop: {
        top: '6rem',
        bottom: '0rem',
      },
      paperAnchorBottom: {
        bottom: '0rem',
      },
    },
    MuiLinearProgress: {
      colorPrimary: {
        'background-color': 'rgba(204,207,211,1)',
      },
      barColorPrimary: {
        'background-color': 'rgba(18,150,134,0.4)',
      },
    },
    MuiDialog: {
      paper: {
        'border-radius': '25px',
      },
    },
  },
  typography: {
    htmlFontSize: 10, //10px simplification:
    fontFamily: ['ProximaNova-Light', 'sans-serif'].join(','),
    h6: {
      fontSize: '1.8rem',
      fontFamily: ['ProximaNova-Semibold', 'sans-serif'].join(','),
      fontWeight: 'normal',
      lineHeight: 'normal',
    },
    subtitle1: {
      color: 'rgba(70,80,90,0.6)',
      fontSize: '1.3rem',
      textTransform: 'uppercase',
      'margin-bottom': '8px',
    },
    subtitle2: {
      color: 'rgba(70,80,90,0.6)',
      fontSize: '1.3rem',
      textTransform: 'uppercase',
      'padding-left': '1.8rem',
      'margin-bottom': '8px',
    },
    body2: {
      fontSize: '1.4rem',
    },
  },
  palette: {
    text: {
      primary: 'rgba(70,80,90,1)', // this applies the root colour
      secondary: 'rgba(70,80,90,0.6)', // needs to be applied as 'theme.palette.text.secondary,'
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    primary: {
      dark: 'rgba(18,150,134,1)',
      main: 'rgba(38,164,150,1)',
      light: 'rgba(58,180,166,1)',
    },
    secondary: {
      dark: 'rgba(25,30,40,1)',
      main: 'rgba(70,80,90,1)',
      light: 'rgba(162,168,174,1)',
    },
    background: {
      paper: 'rgba(255,255,255,1)', // background for components that use 'paper'
      default: 'rgba(246,248,249,1)',
    },
  },
})
