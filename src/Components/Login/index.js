import React, { useState, useEffect } from "react";
import Axios from "axios";
import SingUp from "../../Components/SignUp"
import { useHistory, Link } from "react-router-dom";
import { 
  Container, 
  InputLocus, 
  InputRectangle, 
  SaveButton 
} from '../Common/Styled'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== null) { 
   /*    history.push("/");  */ 
    }
  }, [history]);

  const handleUpdateEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUpdatePassword = (event) => {
    setPassword(event.target.value);  
  };

  const login = async () => {
    const loginBody = {
      email: email,
      password: password,
    };
    try {
      const response = await Axios.post(`${baseUrl}/login`, loginBody);

      window.localStorage.setItem("token", response.data.token);
      alert("Login efetuado com sucesso!");
      history.push("/");
    } catch (error) {
      console.log(error);
      alert("Erro ao logar, tente novamente...");
    }
    };


  return (
    <Container>      
      <InputLocus>
        <label htmlFor="email">E-mail*</label>
          <InputRectangle
            name="email"
            type="email"
            variant='outlined'
            color='secondary'
            placeholder="E-mail"
            value={email}
            onChange={handleUpdateEmail}
          />
      </InputLocus>

      <InputLocus>
        <label htmlFor="senha">Senha*</label>
          <InputRectangle
            name="senha"
            placeholder="Senha"
            type="password"
            variant='outlined'
            color='secondary'
            value={password}
            onChange={handleUpdatePassword}
          />
      </InputLocus>

      <SaveButton
        variant='contained'
        color='secondary'
        onClick={login}
      >
        Entrar
      </SaveButton>

      <nav>
        <p>Não possui cadastro? Clique<Link to={"/signup"}> aqui </Link></p>
      </nav>   
    </Container>
  );
}

export default Login;
