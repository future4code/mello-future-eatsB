import futureEats from "../../Services/futureEats";

export const updateAddress = async (
  street,
  number,
  neighbourhood,
  city,
  state,
  complement
) => {
  const axiosConfig = {
    headers: {
      auth: String(localStorage.getItem("token")),
    },
  };

  const body = {
    street: street,
    number: number,
    neighbourhood: neighbourhood,
    city: city,
    state: state,
    complement: complement,
  };

  try {
    const response = await futureEats.put("/address", body, axiosConfig);
    localStorage.removeItem("token");
    localStorage.setItem("token", response.data.token);
  } catch (e) {
    alert("Houve um erro ao salvar o endereço. Tente novamente.");
  }
};
