import React from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 360px;
  height: 42px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
 
`

const Itens = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`

const MenuBar = () => {
  

  return (
    <Container>
        <Itens>Burguer</Itens>
        <Itens>Asiático</Itens>
        <Itens>Massas</Itens>
        <Itens>Pizza</Itens>
    </Container>
  );
};

export default MenuBar;