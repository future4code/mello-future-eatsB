import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MainContainer = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  width: 200px;

  height: 250px;
  margin: 30px;
`;

const ImgStyle = styled.img`
  width: 100%;
  height: 120px;
  object-fit: contain;
`;

const RestaurantStyle = styled.p`
  width: 100%;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`;

const TimeDelivery = styled.p`
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
`;

const Shipping = styled.p`
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
`;

const ProfileRestaurants = (props) => {
  const history = useHistory();

  const routeUser = () => {
    history.push(`/restaurants/${props.restaurants.id}`);
  };

  return (
    <MainContainer onClick={routeUser}>
      <ImgStyle src={props.restaurants.logoUrl} />
      <RestaurantStyle>{props.restaurants.name} </RestaurantStyle>
      <TimeDelivery>{props.restaurants.deliveryTime} min </TimeDelivery>
      <Shipping>Frete {props.restaurants.shipping},00 </Shipping>
    </MainContainer>
  );
};

export default ProfileRestaurants;
