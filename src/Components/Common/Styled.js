import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 640px;
`;

export const Bar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid black;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 var(--black-25);
  background-color: #ffffff;
  margin-bottom: 16px;
`;

export const InputLocus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 72px;
  padding: 8px 16px;

  :last-of-type{
    margin-bottom: 8px;
  }
`;

export const InputRectangle = styled(TextField)`
  width: 328px;
  height: 56px;
`;

export const SaveButton = styled(Button)`
  width: 328px;
  height: 42px;
  border-radius: 2px;
  background-color: #5cb646;
`;
