import React from "react";
import Routes from "./Pages/Routes";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

const App = () => {
  

  return (
    <div>
      <GlobalStyle />
      <Routes/>
    </div>
  );
};

export default App;