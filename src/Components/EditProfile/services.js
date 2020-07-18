import futureEats from '../../Services/futureEats'

export const updateProfile = async(name, email, cpf,) => {

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
      await futureEats.put('profile', body, axiosConfig)
      alert('Alterado com sucesso')
    } catch (e) {
      alert('Algo aconteceu.')
    }
  
}