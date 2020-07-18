import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../../Contexts/CartContext/context";
import { SaveButton } from "../../Common/styled";

import {
  TextBar,
  Address,
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
import futureEats from "../../../Services/futureEats";

export default function CartBox() {
  const { state, totalPrice, dispatch, restaurantData } = useContext(
    CartContext
  );
  const [paymentMethod, setMethod] = useState();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await futureEats.get("/profile", {
        headers: {
          auth: String(localStorage.getItem("token")),
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
      <TextBar>Meu carrinho</TextBar>
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
