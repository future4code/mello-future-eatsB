import React, { useReducer } from "react";
import CartContext from "./context";

const initialState = [
  {
    id: "3vcYYSOEf8dKeTPd7vHe",
    price: 3,
    photoUrl:
      "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
    name: "Pastel",
    category: "Pastel",
    description: "Pastel autêntico, feito na hora!",
    quantity: 1,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const searchIndex = state.findIndex(
        (item) => item.id === action.product.id //deve receber objeto inteiro além do preço de frete da empresa
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const totalPrice = () =>
    state.reduce((total, num) => {
      return total + num.price; //* num.quantity;
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
