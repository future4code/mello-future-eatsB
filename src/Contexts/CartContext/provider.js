import React, { useReducer, useState, useEffect, useCallback } from "react";
import CartContext from "./context";
import futureEats from "../../Services/futureEats";

const productsInCart = JSON.parse(localStorage.getItem("cart")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const searchIndex = state.findIndex(
        (item) => item.id === action.product[0].id
      );

      const newItem = {
        id: action.product[0].id,
        name: action.product[0].name,
        price: action.product[0].price,
        photoUrl: action.product[0].photoUrl,
        description: action.product[0].description,
        quantity: action.quantity,
      };

      if (searchIndex !== -1) {
        state[searchIndex] = {
          id: state[searchIndex].id,
          name: state[searchIndex].name,
          price: state[searchIndex].price,
          photoUrl: state[searchIndex].photoUrl,
          description: state[searchIndex].description,
          quantity:
            Number(state[searchIndex].quantity) + Number(action.quantity),
        };

        return state;
      } else {
        return [...state, newItem];
      }

    case "REMOVE_FROM_CART":
      return state.filter((item) => false);

    case "CLEAR":
      return [];

    default:
      return state;
  }
};

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, productsInCart);

  const [restaurantData, setRestaurantData] = useState(
    JSON.parse(localStorage.getItem("restaurant")) || {}
  );

  const totalPrice = useCallback(
    () =>
      state.reduce((total, num) => {
        return Math.floor(
          Number(total) + Number(num.price) * Number(num.quantity)
        );
      }, 0),
    [state]
  );

  useEffect(() => {
    totalPrice();
  }, [state, totalPrice]);

  const getRestaurantDetail = async (restaurantId) => {
    const axiosConfig = {
      headers: {
        auth: String(localStorage.getItem("token")),
      },
    };

    try {
      const response = await futureEats.get(
        `/restaurants/${restaurantId}`,
        axiosConfig
      );
      setRestaurantData(response.data.restaurant);
      localStorage.setItem(
        "restaurant",
        JSON.stringify(response.data.restaurant)
      );
    } catch (error) {}
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        totalPrice,
        restaurantData,
        getRestaurantDetail,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
