import styled, { keyframes } from "styled-components";

const OpenUp = keyframes`
  from {
    height: 0px;
    width: 0px;
  }
  to{
    width: 30%;
  }
`;

export const Container = styled.div`
  display: flex;
  width: auto;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: black;

  img {
    width: 30%;
    animation: ${OpenUp} 3s;
  }
`;
