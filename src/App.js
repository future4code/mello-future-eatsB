import React from "react";
import Routes from "./Pages/Routes";
<<<<<<< HEAD
import { createGlobalStyle } from "styled-components";
import CartProvider from "./Contexts/CartContext/provider";
=======
import styled, {createGlobalStyle} from 'styled-components';

>>>>>>> c0e6c1b8d57af70ddfc73fd7be6bf5b50d50efc2

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

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
`

const App = () => {
  return (
<<<<<<< HEAD
    <>
      <GlobalStyle />
      <CartProvider>
        <Routes />
      </CartProvider>
    </>
=======
    <AppContainer>
      <GlobalStyle />
      <Routes/>
    </AppContainer>
>>>>>>> c0e6c1b8d57af70ddfc73fd7be6bf5b50d50efc2
  );
};

export default App;
