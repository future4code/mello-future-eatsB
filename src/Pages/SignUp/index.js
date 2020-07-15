import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/{{appName}}/signup";

const ContainerSignUp = styled.div`
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
  margin: auto;
  height: 100vw;
`; 

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleUpdateEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleCpf = (event) => {
    setCpf(event.target.value);
  };

  const handleUpdatePassword = (event) => {
    setPassword(event.target.value);
  };

  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  };

  const signUp = () => {
    const body = {
      name: name,
      email: email,
      cpf: cpf,
      password: password,
    };

    axios
      .post(`${baseUrl}`, body)
      .then(() => {
        alert("Conta criada com sucesso!");
        setName("");
        setEmail("");
        setCpf("");
        setPassword("");
        goToLogin();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <form>
      <ContainerSignUp>
      <label>
          <strong>Future Eats</strong>
          <p>Cadastrar</p> 
      </label>
      
        <input
          type="text"
          placeholder="Nome e sobrenome"
          value={name}
          onChange={handleName}
        />

        <input
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={handleUpdateEmail}
        />

        <input
          placeholder="000.000.000-00"
          value={cpf}
          onChange={handleCpf}
        />

        <input
          placeholder="Mínimo 5 caracteres"
          value={password}
          onChange={handleUpdatePassword}
        />

        <input
          placeholder="Confirme a senha anterior"
          value={password}
          onChange={handleUpdatePassword}
        />

        <button onClick={signUp}>Criar</button>
      </ContainerSignUp>
    </form>
  );
}

export default SignUp;
