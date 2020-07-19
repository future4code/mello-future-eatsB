import styled from "styled-components";
import { TextField } from '@material-ui/core'

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
  :last-of-type {
    margin-bottom: 8px;
  }
`;

export const Bar = styled.div`
    top: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 64px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.25);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 var(--black-25);
    background-color: #ffffff;
`;

export const BackImg = styled.img`
    position: absolute;
    width: 23px;
    height: 24px;
    top: 30px;
    left: 16px;
    object-fit: contain;
`;

export const TextBar = styled.p`
    width: 91px;
    height: 19px;
    color: #000000;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;

    position: absolute;
    top: 33px;
`;

export const InputRectangle1 = styled(TextField)`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  padding-left: 16px;
  position: absolute;
  top: 80px;
`;

export const InputRectangle2 = styled(TextField)`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  padding-left: 16px;
  position: absolute;
  top: 80px;
`;

export const InputRectangle3 = styled(TextField)`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  padding-left: 16px;
  position: absolute;
  top: 80px;
`;

export const SaveButton = styled.button`
  width: 328px;
  height: 42px;
  border-radius: 2px;
  background-color: #5cb646;
  outline: none;
  border: none;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
  position: absolute;
  top: 304px;
`;
