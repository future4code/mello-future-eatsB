import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import LogoFutureEats from "../../Assets/img/LogoFutureEats.png";
import PasswordImg from "../../Assets/img/PasswordImg.svg"
import { 
  Container,
  ImgLogo,
  Signin,
  InputLocus,
  LabelName,
  LabelPassword, 
  InputRectangle1,
  InputRectangle2,
  PasswordPhoto,
  SaveButton,
  Signup,
  StyledLink
} from './styled';

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
      <ImgLogo src={LogoFutureEats} alt="Logo"/>
      <Signin>Entrar</Signin>  
      <InputLocus>
        <LabelName htmlFor="email">E-mail*</LabelName>
          <InputRectangle1
            name="email"
            required
            type="email"
            variant='outlined'
            color='secondary'
            placeholder="email@email.com"
            value={email}
            onChange={handleUpdateEmail}
            InputLabelProps={{shrink: true}}
          />
      </InputLocus>

      <InputLocus>
        <LabelPassword htmlFor="senha">Senha*</LabelPassword>
          <InputRectangle2
            name="senha"
            required
            placeholder="Mínimo 6 caracteres"
            type="password"
            variant='outlined'
            color='secondary'
            value={password}
            onChange={handleUpdatePassword}
            InputLabelProps={{shrink: true}}
          />
          <PasswordPhoto src={PasswordImg} alt="PasswordLogo"/>
       </InputLocus>

      <SaveButton
        variant='contained'
        color='secondary'
        onClick={login}
      >
        Entrar
      </SaveButton>

      <nav>
        <Signup>
          <StyledLink to={"/signup"}>
            Não possui cadastro? Clique aqui.
          </StyledLink>
        </Signup>
      </nav>   
    </Container>
  );
}

export default Login;
