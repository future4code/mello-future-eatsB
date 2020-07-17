import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 375px;
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

export const SearchStyled = styled.input`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  padding-left: 56px; 
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  
  position: absolute;
  top: 72px;
  left: 16px;
`;

export const ImgSearch = styled.img`
  position: absolute;
  top: 88px;
  left: 33px;
`;

export const ButtonSearch = styled.button`
  position: absolute;
  width: 85px;
  height: 25px;
  top: 88px;
  right: 32px;
  outline: none;
  border: none;
  border-radius: 2px;

  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  background: #b8b8b8;
`;
