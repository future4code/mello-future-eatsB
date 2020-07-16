import React, { useReducer, useContext } from "react";
import styled from 'styled-components';


const MainContainer = styled.div` 
  width: 328px;
  height: 188px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`

const ImgStyle = styled.img`
  width: 328px;
  height: 120px;
  object-fit: contain;
`

const RestaurantStyle = styled.p`
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
`

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
`

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
`


const ProfileRestaurants = (props) => {

  return (
    
    <MainContainer>
        <ImgStyle src={props.restaurants.logoUrl}/>
        <RestaurantStyle>{props.restaurants.name} </RestaurantStyle>
        <TimeDelivery>{props.restaurants.deliveryTime} min </TimeDelivery>
        <Shipping>Frete {props.restaurants.shipping},00 </Shipping>
    </MainContainer>
    
  );
};

export default ProfileRestaurants;