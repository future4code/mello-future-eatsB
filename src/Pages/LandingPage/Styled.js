import styled, {keyframes} from 'styled-components';

const OpenUp = keyframes`
  from {
    height: 0px;
    width: 0px;
  }
  to{
    width: auto%;
    height: auto%;
  }
`

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  
  img {
    width: 60%;
    animation: ${OpenUp} 3s;
  }
`;
