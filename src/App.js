import React from "react";
import Routes from "./Pages/Routes";
import { createGlobalStyle } from "styled-components";
import CartProvider from "./Contexts/CartContext/provider";

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
    <>
      <GlobalStyle />
      <CartProvider>
        <Routes />
      </CartProvider>
    </>
  );
};

export default App;
