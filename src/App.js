import React from "react";
import Routes from "./Pages/Routes";
import {createGlobalStyle} from 'styled-components';
import FeedPage from "./Pages/FeedPage";

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
    <FeedPage/>
   
    </div>
  );
};

export default App;