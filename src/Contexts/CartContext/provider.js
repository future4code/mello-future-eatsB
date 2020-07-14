import React, { useReducer, useState } from "react";
import CartContext from "./context";

const productsInCart = [];

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_CART":
      const searchIndex = state.findIndex(
        (item) => item.id === action.product.id
      );

      if (searchIndex > -1) {
        state[searchIndex] = {
          ...state[searchIndex],
          quantity: state[searchIndex].quantity + 1,
        };
      } else {
        state.push({ ...action.product, quantity: 1 });
      }
      return state;

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, productsInCart);

  const [restaurantData, setRestaurantData] = useState({
    name: "Hamburgueria do Fabio Assunção",
    shipmentFee: 20,
    shipmentTime: 10,
    address: "Rua Joao Vilela, 22",
  });

  const totalPrice = () =>
    state.reduce((total, num) => {
      return total + num.price * num.quantity;
    }, 0);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        totalPrice,
        restaurantData,
        setRestaurantData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
