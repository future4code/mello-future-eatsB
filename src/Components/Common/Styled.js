import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 640px;
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

export const ModalContainer = styled.div`
  width: 300px;
  height: 100px;
  background-color: #FFFFFF;
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;

  span {
    flex: 1;
    align-self: flex-end;
    padding: 8px;
  }

  div {
    flex: 1;
  }
`
