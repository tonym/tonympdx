import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import HomeView from './views/HomeView';

const customThemeSettings = {
  palette: {
    background: {
      default: '#f2efc4',
      paper: '#f2efc4'
    },
    primary: {
      main: '#667645'
    },
    secondary: {
      main: '#193441'
    }
  },
  typography: {
    fontFamily: '"Futura-Book", "Helvetica", "Arial", sans-serif'
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
