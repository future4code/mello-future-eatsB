import React, { useReducer, useState } from "react";
import Routes from "./Pages/Routes";
import {createGlobalStyle} from 'styled-components';
import Filters, {initialState} from './Filters/Filters'
import FeedPage from "./Pages/FeedPage";
import FiltersContext from './Contexts/Filters';
import RestaurantsPage from "./Pages/RestaurantsPage";



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
  
  const [filterState, filtersDispatch] = useReducer(Filters, initialState);

  

  return (

    <FiltersContext.Provider value={{ filters: filterState, dispatch: filtersDispatch }}>
       <div>
            <GlobalStyle />
            <Routes/>
       </div>

    </FiltersContext.Provider>
   
  );
};

export default App;