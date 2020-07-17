import React, { useContext, useState } from "react";
import CartContext from "../../../Contexts/CartContext/context";
import { SaveButton } from "../../Common/Styled";

import {
  Address,
  OrderBox,
  Place,
  PriceBox,
  DeliveryTax,
  PaymentMethod,
} from "./styles";
import CartItem from "../CartItem/cartItem";
import { placeOrder } from "./services";

export default function CartBox() {
  const {
    state,
    totalPrice,
    dispatch,
    restaurantData,
    restaurantID,
  } = useContext(CartContext);
  const [paymentMethod, setMethod] = useState();

  const sendOrder = async (e) => {
    e.preventDefault();
    await placeOrder(state, paymentMethod, restaurantID);
  };

  return (
    <>
      <Address>
        <p>Endereço de entrega</p>
        <b>Rua Antonio Vilela, 22</b>
      </Address>
      <OrderBox>
        {state.length === 0 ? (
          <h3>Carrinho vazio</h3>
        ) : (
          <div id="list">
            <Place>
              <h3>{restaurantData.name}</h3>
              <p>{restaurantData.address}</p>
              <p>{restaurantData.deliveryTime} minutos</p>
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
