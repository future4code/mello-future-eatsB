import React, { useReducer } from "react";
import CartContext from "./context";

const initialState = [
  {
    id: 1,
    name: "John",
    lastName: "Doe",
    quantity: 3,
    price: 22.95,
  },
  {
    id: 2,
    name: "John",
    lastName: "Doe",
    quantity: 3,
    price: 22.95,
  },
  {
    id: 3,
    name: "John",
    lastName: "Doe",
    quantity: 3,
    price: 122.95,
  },
];

const reducer = (state, action) => {
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
        state.push(action.product);
      }
      return state;

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
