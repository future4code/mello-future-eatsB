import futureEats from '../../Services/futureEats'

export const updateProfile = async(name, email, cpf) => {
  const axiosConfig = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  const body = {
    name: name,
    email: email,
    cpf: cpf
  }

  try{
    const response = await futureEats.put(
      '/profile', 
      body, 
      axiosConfig
    )
    console.log(response.data)
  }catch(e){
    console.log(e)
  }
}