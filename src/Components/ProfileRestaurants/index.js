import React from "react";
import { useHistory } from "react-router-dom";
import {
  MainContainer,
  ImgStyle,
  RestaurantStyle,
  TimeDelivery,
  Shipping ,
} from "./styled";
 
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
