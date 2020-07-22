import styled from "styled-components";

export const MainContainer = styled.div`
  width: 328px;
  height: 188px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-bottom: 8px;
  
  position: relative;
  top: 186px;
  right: 8px;
`;

export const ImgStyle = styled.img`
  width: 328px;
  height: 120px;
  object-fit: cover;

  border-radius: 8px 8px 0 0;
  z-index: -1;
`;

export const RestaurantStyle = styled.p`
  width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;

  position: absolute;
  top: 132px;
  left: 16px;
`;

export const TimeDelivery = styled.p`
  width: 148px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  position: absolute;
  top: 154px;
  left: 16px;
`;

export const Shipping = styled.p`
  width: 140px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: #b8b8b8;
  position: absolute;
  top: 154px;
  right: 16px;
`;
