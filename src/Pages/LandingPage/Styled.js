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
  width: 360px;
  height: 834px;
  background-color: black;
  justify-content: center;
  align-items: center;
  img {
    animation: ${OpenUp} 3s;
    width: 126px;
    height: 65px;
  }
`;
