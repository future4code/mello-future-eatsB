import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 640px;
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
  top: 207px;
  left: 32px;
`;

export const LabelEmail = styled.label`
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
  top: 279px;
  left: 32px;
`;

export const LabelCpf = styled.label`
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
  top: 279px;
  left: 32px;
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
  top: 279px;
  left: 32px;
`;

export const LabelPasswordAgain = styled.label`
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
  top: 279px;
  left: 32px;
`;

export const InputRectangle1 = styled.input`
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

export const InputRectangle2 = styled.input`
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
  top: 284px;
`;

export const InputRectangle3 = styled.input`
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
  top: 356px;
`;

export const InputRectangle4 = styled.input`
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
  top: 428px;
`;

export const InputRectangle5 = styled.input`
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
  top: 500px;
`;

export const PasswordPhoto1 = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  position: absolute;
  top: 444px;
  right: 32px;
`;

export const PasswordPhoto2 = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  position: absolute;
  top: 516px;
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
  top: 572px;
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
