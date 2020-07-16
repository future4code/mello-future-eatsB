import React, { useReducer, useState } from "react";
import Routes from "./Pages/Routes";
import {createGlobalStyle} from 'styled-components';
import Filters, {initialState} from './Filters/Filters'
import FeedPage from "./Pages/FeedPage";
import FiltersContext from './Contexts/Filters';



const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

/* COMENTEI A FEEDPAGE PARA EVITAR CONFLITOS */

const App = () => {
  
  const [filterState, filtersDispatch] = useReducer(Filters, initialState);

  

  return (

    <FiltersContext.Provider value={{ filters: filterState, dispatch: filtersDispatch }}>
       <div>
            <GlobalStyle />
            {/*<FeedPage/>*/}
            <Routes/>
       </div>

    </FiltersContext.Provider>
   
  );
};

export default App;