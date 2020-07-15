import React from "react";
import Routes from "./Pages/Routes";
import styled, {createGlobalStyle} from 'styled-components';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

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
    -webkit-touch-callout: none;
  }
`;

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
`

const App = () => {
  

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle />
        <Routes/>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;