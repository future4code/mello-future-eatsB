import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import LogoFutureEats from "../../Assets/img/LogoFutureEats.png";

import {
  Container,
  ImgLogo,
  Signin,
  InputLocus,
  LabelName,
  LabelPassword,
  InputRectangle1,
  InputRectangle2,
  SaveButton,
  Signup,
  StyledLink,
} from "./styled";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

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
      if (response.data.user.hasAddress === true) {
        history.push("/feed");
      } else if (response.data.user.hasAddress === false) {
        history.push("/editaddress");
      }
    } catch (error) {
      console.log(error);
      alert("E-mail ou senha incorreto ou inexistente. Tente novamente.");
    }
  };

  return (
    <Container>
      <ImgLogo src={LogoFutureEats} alt="Logo" />
      <Signin>Entrar</Signin>
      <InputLocus>
        <LabelName htmlFor="email">E-mail*</LabelName>
        <InputRectangle1
          name="email"
          type="email"
          variant="outlined"
          color="secondary"
          placeholder="email@email.com"
          value={email}
          onChange={handleUpdateEmail}
        />
      </InputLocus>

      <InputLocus>
        <LabelPassword htmlFor="senha">Senha*</LabelPassword>
        <InputRectangle2
          name="senha"
          placeholder="Mínimo 6 caracteres"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          color="secondary"
          value={password}
          onChange={handleUpdatePassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </InputLocus>

      <SaveButton variant="contained" color="secondary" onClick={login}>
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
