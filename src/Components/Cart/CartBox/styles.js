import styled from "styled-components";

export const Address = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0 10px 20px;
  background-color: #eeeeee;

  p {
    color: gray;
  }
`;

export const Place = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  h3 {
    color: green;
  }

  p {
    color: gray;
  }
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
    border-bottom: 2px solid black;
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
