import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import blueGrey from '@material-ui/core/colors/blueGrey';
import HomeView from './views/HomeView';

const customThemeSettings = {
  local: {
    maxWidth: '980px'
  },
  palette: {
    background: {
      default: blueGrey[900],
      paper: blueGrey[800]
    },
    type: 'dark'
  }
}

const theme = createMuiTheme(customThemeSettings);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <HomeView />
      </MuiThemeProvider>
    );
  }
}

export default App;
