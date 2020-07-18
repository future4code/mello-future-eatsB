import styled from "styled-components";

export const TextBar = styled.p`
    color: #000000;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;

    position: absolute;
    width: 91px;
    height: 19px;
    top: 33px;
    right: 135px;
`;

export const Address = styled.section`
  width: 100%;
  height: 76px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0 10px 20px;
  background-color: #eeeeee;

  position: absolute;
  top: 65px;
  z-index: 2;
`;

export const AddressShipping = styled.p`
  color: #b8b8b8;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;

export const Street = styled.p`
  color: #000000;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;

export const Place = styled.section`
  width: 100%;
  height: 102px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  margin-top: 56px;
`;

export const RestaurantName = styled.p`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
  margin-top: 8px;
`;

export const AddressRestaurant = styled.p`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin-top: 8px;
`;

export const TimeShipping = styled.p`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin-top: 8px;
`;

export const OrderBox = styled.section`
  min-height: 400px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  #list {
    overflow-y: scroll;
    width: 95%;
  }
`;

export const PriceBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  #subtotal {
    color: green;
  }
`;

export const DeliveryTax = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

export const PaymentMethod = styled.section`
  width: 95%;
  padding: 5px;
  margin: 5px;

  p {
    border-bottom: 1px solid black;
    border-radius: 2.5px;
    padding: 5px;
  }

  form {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
  }

  input {
    display: inline;
  }

  #confirm {
    margin-top: 30px;
    align-self: center;
  }
`;
