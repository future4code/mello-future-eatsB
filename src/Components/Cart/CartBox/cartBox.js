import React, { useContext } from "react";
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

export default function CartBox() {
  const { state, totalPrice, dispatch, restaurantData } = useContext(
    CartContext
  );

  const sendOrder = async (e) => {
    //await placeOrder(state, paymentMethod, restaurantData.id);
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
              <p>{restaurantData.shipmentTime} minutos</p>
            </Place>

            {state.map((item) => {
              return <CartItem key={item.id} {...item} dispatch={dispatch} />;
            })}
          </div>
        )}
      </OrderBox>
      <DeliveryTax>
        <p>Frete: R${restaurantData.shipmentFee}</p>
      </DeliveryTax>
      <PriceBox>
        <p>SUBTOTAL</p>
        <p id="subtotal">R$ {totalPrice()}</p>
      </PriceBox>
      <PaymentMethod>
        <p>Forma de pagamento</p>

        <form action="">
          <div>
            <input type="radio" name="method" value="Dinheiro" />
            <label htmlFor=""> Dinheiro</label>
          </div>
          <div>
            <input type="radio" name="method" value="Cartão de crédito" />
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
