import futureEats from "../../../Services/futureEats";

export const placeOrder = (state, paymentMethod, restaurantId) => {
  const axiosConfig = {
    headers: {
      auth: /* localStorage.getItem("token") */
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpXdFp0TjN5QUwzRG40OE96ZkU1IiwibmFtZSI6Ik1hcmlhIiwiZW1haWwiOiJtYXJpYUBnbWFpbC5jb20iLCJjcGYiOiIxMTEuMjIyLjMzMy00NCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJBdi4gQW5nw6lsaWNhLCAxODE0LCAzMDUgLSBIaWdpZW7Ds3BvbGlzIiwiaWF0IjoxNTk0NzcyNzExfQ.9812N7XBG1cLsRAzM-RmIIyKrrBI7LYpfJp2Q1TSVAY",
    },
  };

  const body = {
    products: state.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
      };
    }),
    paymentMethod: paymentMethod,
  };

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
