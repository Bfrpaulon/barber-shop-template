import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage';

const theme = createTheme({
  palette: {
    primary: {
      100: '#FF0000',
      200: '#ff5a36',
      300: '#ffc993',
    },
    accent: {
      100: '#990000',
      200: '#ffa783',
      
    },
    text: {
      100: '#FFFFFF',
      200: '#e0e0e0',
    },
    background: {
      100: '#000000',
      200: '#161616',
      300: '#2c2c2c',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
