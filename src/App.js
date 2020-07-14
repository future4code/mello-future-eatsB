import React from "react";
import Routes from "./Pages/Routes";
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  background: black;
`

const App = () => {
  

  return (
    <AppContainer>
      <GlobalStyle />
      <Routes/>
    </AppContainer>
  );
};

export default App;