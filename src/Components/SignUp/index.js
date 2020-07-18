import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import LogoFutureEats from "../../Assets/img/LogoFutureEats.png";
import PasswordImg from "../../Assets/img/PasswordImg.svg"
import Back from "../../Assets/img/Back.svg";
import {
  Container,
  Bar,
  BackImg,
  ImgLogo,
  Signin,
  InputRectangle1,
  InputRectangle2,
  InputRectangle3,
  InputRectangle4,
  InputRectangle5,
  InputLocus,
  LabelName,
  LabelEmail,
  LabelCpf,
  LabelPassword,
  LabelPasswordAgain,
  SaveButton,
  PasswordPhoto1,
  PasswordPhoto2
} from "./styled";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/signup";

function SignUp() {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== null) { 
   /*    history.push("/");  */ 
    }
  }, [history]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });

  const buttonSignUp = () => {
    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      password: form.password,
    };
    console.log(body);
    if (body.password === form.confirmPassword) {
      axios
        .post(`${baseUrl}`, body)
        .then((response) => {
          console.log(response);
          window.localStorage.setItem("token", response.data.token);
          alert("Conta criada com sucesso!");
          goToLogin();
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("Senhas não conferem!");
    }
  };

  const goToLogin = () => {
    resetForm();
    buttonSignUp();
    history.push("/editaddress");
  };

  const backToLogin = () => {
    history.push("/login");
  };
  
  return (
    <Container>
      <Bar>
        <BackImg onClick={backToLogin} src={Back} alt="Drop Right" />
      </Bar>
      <ImgLogo src={LogoFutureEats} alt="Logo"/>
      <Signin>Cadastrar</Signin>  
      <InputLocus>
        <LabelName htmlFor="name">Nome*</LabelName>
        <InputRectangle1
          required
          variant="outlined"
          color="secondary"
          type="text"
          placeholder="Nome e sobrenome"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </InputLocus>

      <InputLocus>
        <LabelEmail htmlFor="email">E-mail*</LabelEmail>
        <InputRectangle2
          required
          variant="outlined"
          color="secondary"
          type="email"
          placeholder="email@email.com"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </InputLocus>

      <InputLocus>
        <LabelCpf htmlFor="cpf">CPF*</LabelCpf>
        <InputRectangle3
          required
          variant="outlined"
          color="secondary"
          placeholder="000.000.000-00"
          pattern="/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"
          name="cpf"
          value={form.cpf}
          onChange={handleChange}
        />
      </InputLocus>

      <InputLocus>
        <LabelPassword htmlFor="password">Senha*</LabelPassword>
        <InputRectangle4
          required
          type="password"
          variant="outlined"
          color="secondary"
          placeholder="Mínimo 6 caracteres"
          pattern="[A-Za-z0-9 ]{6,}"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <PasswordPhoto1 src={PasswordImg} alt="PasswordLogo"/>
      </InputLocus>

      <InputLocus>
        <LabelPasswordAgain htmlFor="confirmPassword">
          Confirmar*
        </LabelPasswordAgain>
        <InputRectangle5
          required
          type="password"
          variant="outlined"
          color="secondary"
          placeholder="Confirme a senha anterior"
          pattern="[A-Za-z0-9 ]{6,}"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <PasswordPhoto2 src={PasswordImg} alt="PasswordLogo"/>
      </InputLocus>

      <SaveButton variant="contained" color="secondary" onClick={buttonSignUp}>
        Criar
      </SaveButton>
    </Container>
  );
}

export default SignUp;
