import styled, { keyframes } from "styled-components";

const OpenUp = keyframes`
  from {
    height: 0px;
    width: 0px;
  }
  to{
     height: auto;
      }
`;

export const Container = styled.div`
  display: flex;
  height: 812px;
  background-color: black;
  justify-content: center;
  align-items: center;

  img {
    animation: ${OpenUp} 3s;
  }
`;
