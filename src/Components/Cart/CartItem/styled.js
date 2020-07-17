import styled from "styled-components";

export const ItemCard = styled.div`
width: 328px;
height: 112px;
border-radius: 8px;
border: solid 1px #b8b8b8;
margin-top: 8px;

display: flex;
`;

export const StandardText = styled.p`
  font-size: 16px;
`;

export const StandardSmallText = styled.p`
  font-size: 12px;
`;

export const ImgMenu = styled.img`
  width: 96px;
  height: 112px;
  object-fit: cover;
  color: #B8B8B8;
  font-size: 12px;
  text-align: center;
  border-radius: 8px 0 0 8px;

  
  top: 0px;
  left: 0;
  z-index: -1;
`;

export const BoxDescription = styled.div`
  display: flex;
  flex-direction: column;

  width: 232px;
  height: 112px;
`;

export const QuantityButton = styled.button`
  width: 33px;
  height: 33px;
  border-radius: 0 8px 0 8px;
  border: solid 1px #5cb646;
  color: #5cb646;
  background-color: transparent;

  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  
  position: relative;
  bottom: 1px;
  left: 197.5px;
`;

export const GreenText = styled(StandardText)`
  color: #5CB646;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;

  position: relative;
  width: 167px;
  height: 18px;
  top: 0;
  left: 16px;
`;

export const GreySmallText = styled(StandardSmallText)`
  color: #B8B8B8;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;

  position: relative;
  width: 200px;
  height: 30px;
  top: 8px;
  left: 16px;
`;

export const BlackText = styled(StandardText)`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;

  position: relative;
  width: 118px;
  height: 19px;
  top: 8px;
  left: 16px;
`;

export const RemoveButton = styled.button`
  width: 90px;
  height: 31px;
  border-radius: 8px 0 8px 0;
  border: solid 1px #e02020;
  color: #e02020;
  background-color: transparent;

  position: relative;
  top: -1px;
  left: 141px;
`;
