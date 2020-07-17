import React, { useContext, useState } from "react";
import CartContext from "../../../Contexts/CartContext/context";
import { SaveButton } from "../../Common/Styled";

import {
  TextBar,
  Address,
  AddressShipping,
  Street,
  OrderBox,
  Place,
  RestaurantName,
  AddressRestaurant,
  TimeShipping,
  PriceBox,
  DeliveryTax,
  PaymentMethod,
} from "./styled";

import CartItem from "../CartItem/cartItem";
import { placeOrder } from "./services";

export default function CartBox() {
  const {
    state,
    totalPrice,
    dispatch,
    restaurantData,
    restaurantId,
  } = useContext(CartContext);
  const [paymentMethod, setMethod] = useState();

  const sendOrder = async (e) => {
    e.preventDefault();
    await placeOrder(state, paymentMethod, restaurantId);
  };

  return (
    <>
      <TextBar>Meu carrinho</TextBar>
      <Address>
        <AddressShipping>Endereço de entrega</AddressShipping>
        <Street>Rua Antonio Vilela, 22</Street>
      </Address>
      <OrderBox>
        {state.length === 0 ? (
          <h3>Carrinho vazio</h3>
        ) : (
          <div id="list">
            <Place>
              <RestaurantName>{restaurantData.name}</RestaurantName>
              <AddressRestaurant>{restaurantData.address}</AddressRestaurant>
              <TimeShipping>{restaurantData.deliveryTime} minutos</TimeShipping>
            </Place>

            {state.map((item) => {
              console.log(state);
              return <CartItem key={item.id} {...item} dispatch={dispatch} />;
            })}
          </div>
        )}
      </OrderBox>
      <DeliveryTax>
        <p>Frete: R$ {restaurantData.shipping}</p>
      </DeliveryTax>
      <PriceBox>
        <p>SUBTOTAL</p>
        <p id="subtotal">R$ {totalPrice()}</p>
      </PriceBox>
      <PaymentMethod>
        <p>Forma de pagamento</p>

        <form action="">
          <div>
            <input
              onChange={(e) => {
                setMethod(e.target.value);
              }}
              type="radio"
              name="method"
              value="Dinheiro"
            />
            <label htmlFor=""> Dinheiro</label>
          </div>
          <div>
            <input
              onChange={(e) => {
                setMethod(e.target.value);
              }}
              type="radio"
              name="method"
              value="Cartão de crédito"
            />
            <label htmlFor=""> Cartão de crédito</label>
          </div>
          <SaveButton
            onClick={sendOrder}
            id="confirm"
            color="secondary"
            variant="contained"
          >
            Confirmar
          </SaveButton>
        </form>
      </PaymentMethod>
    </>
  );
}
