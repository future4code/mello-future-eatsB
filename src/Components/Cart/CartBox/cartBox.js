import React, { useContext, useState, useEffect } from "react";
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
import futureEats from "../../../Services/futureEats";

export default function CartBox() {
  const {
    state,
    totalPrice,
    dispatch,
    restaurantData,
    restaurantId,
  } = useContext(CartContext);
  const [paymentMethod, setMethod] = useState();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await futureEats.get("/profile", {
        headers: {
          /* localStorage.getItem("token") */
          auth:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpXdFp0TjN5QUwzRG40OE96ZkU1IiwibmFtZSI6Ik1hcmlhIiwiZW1haWwiOiJtYXJpYUBnbWFpbC5jb20iLCJjcGYiOiIxMTEuMjIyLjMzMy00NCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJBdi4gQW5nw6lsaWNhLCAxODE0LCAzMDUgLSBIaWdpZW7Ds3BvbGlzIiwiaWF0IjoxNTk0NzcyNzExfQ.9812N7XBG1cLsRAzM-RmIIyKrrBI7LYpfJp2Q1TSVAY",
        },
      });

      setProfile(response.data.user);
    } catch (error) {}
  };

  const sendOrder = async (e) => {
    e.preventDefault();
    await placeOrder(state, paymentMethod, restaurantData.id);
  };

  return (
    <>
      <Address>
        <p>Endereço de entrega</p>
        <b>{profile.address}</b>
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
        {state.length > 0 && <p>Frete: R$ {restaurantData.shipping}</p>}
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
              value="cash"
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
              value="creditcard"
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
