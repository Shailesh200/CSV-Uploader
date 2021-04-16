import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import * as React from 'react';
import './App.css';
import { AppHeader } from './components/AppHeader';
import { BackToTop } from './components/BackToTop';
import Home from './containers/Home';

function App() {
  const themeObject = {
    palette: {
      type: 'light',
      primary: lightBlue,
    },
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
      ].join(','),
    },
  }

  const muiTheme = createMuiTheme(themeObject);
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <AppHeader />
      <Home />
      <BackToTop />
    </MuiThemeProvider>
  )
}

export default App;
