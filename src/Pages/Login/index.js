import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/{{appName}}/login";

const ContainerLogin = styled.div`
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
  margin: auto;
  height: 100vw;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== null) {
      history.push("/");
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
      window.localStorage.setItem("username", response.data.user.username);
      alert("Login efetuado com sucesso!");
      history.push("/");
    } catch (error) {
      console.log(error);
      alert("Erro ao logar, tente novamente...");
    }
  };

  return (
    <form>
      <ContainerLogin>
        <label>
          <strong>Future Eats</strong>
          <p>Entrar</p>
        </label>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleUpdateEmail}
        />

        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={handleUpdatePassword}
        />

        <button onClick={login}>Entrar</button>

        <p>Não possui cadastro? Clique</p>
        <button onClick={() => history.push("/signup")}>aqui</button>
      </ContainerLogin>
    </form>
  );
}

export default Login;
