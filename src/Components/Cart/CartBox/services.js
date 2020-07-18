import futureEats from "../../../Services/futureEats";

export const placeOrder = (state, paymentMethod, restaurantId) => {
  const axiosConfig = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  const body = {
    products: state.map((item) => {
      return {
        id: item.id,
        quantity: Number(item.quantity),
      };
    }),
    paymentMethod: paymentMethod,
  };

  console.log(body, restaurantId, `/restaurants/${restaurantId}/order`);

  try {
    const response = futureEats.post(
      `/restaurants/${restaurantId}/order`,
      axiosConfig,
      body
    );
    console.log(response.data.order);
  } catch (error) {
    console.log(error);
  }
};
