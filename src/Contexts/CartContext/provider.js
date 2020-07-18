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

        localStorage.setItem("cart", JSON.stringify(state));
        return state;
      } else {
        const updatedState = [...state, newItem];
        localStorage.setItem("cart", JSON.stringify(updatedState));
        return updatedState;
      }

    case "REMOVE_FROM_CART":
      const updatedState = state.filter((item) => item.id !== action.id);
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;

    case "CLEAR":
      localStorage.remove("cart");
      localStorage.remove("restaurant");
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
        auth:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpXdFp0TjN5QUwzRG40OE96ZkU1IiwibmFtZSI6Ik1hcmlhIiwiZW1haWwiOiJtYXJpYUBnbWFpbC5jb20iLCJjcGYiOiIxMTEuMjIyLjMzMy00NCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJBdi4gQW5nw6lsaWNhLCAxODE0LCAzMDUgLSBIaWdpZW7Ds3BvbGlzIiwiaWF0IjoxNTk0NzcyNzExfQ.9812N7XBG1cLsRAzM-RmIIyKrrBI7LYpfJp2Q1TSVAY",
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
