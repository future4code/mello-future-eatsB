import React from "react";
import Routes from "./Pages/Routes";
import {createGlobalStyle} from 'styled-components';
import CartProvider from "./Contexts/CartContext/provider";
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import ProfileProvider from "./Contexts/ProfileContext/Provider";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b8b8b8'
    },
    secondary: {
      main: '#5cb646'
    }
  } 
})

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CartProvider>
        <ProfileProvider>
          <Routes />
        </ProfileProvider>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
