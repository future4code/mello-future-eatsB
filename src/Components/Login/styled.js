import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextField } from '@material-ui/core'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 640px;
`;

export const ImgLogo = styled.img`
  width: 104px;
  height: 58px;
  object-fit: contain;
  position: absolute;
  top: 88px;
`;

export const Signin = styled.p`
  width: 296px;
  height: 18px;
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
  top: 174px;
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

export const LabelName = styled.label`
  width: 78px;
  height: 18px;
  background-color: white;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
  z-index: 2;
  position: absolute;
  top: 215px;
  left: 32px;
  padding-left: 5px;
`;

export const LabelPassword = styled.label`
  width: 78px;
  height: 18px;
  background-color: white;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
  z-index: 2;
  position: absolute;
  top: 285px;
  left: 32px;
  padding-left: 5px;
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
  top: 212px;
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
  top: 212px;
`;

export const PasswordPhoto = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  position: absolute;
  top: 300px;
  right: 32px;
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
  top: 356px;
`;

export const Signup = styled.p`
  width: 296px;
  height: 18px;
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
  top: 426px;
  right: 32px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
