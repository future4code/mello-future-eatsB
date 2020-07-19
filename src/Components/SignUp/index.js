import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import LogoFutureEats from "../../Assets/img/LogoFutureEats.png";
import { InputAdornment, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Back from "../../Assets/img/Back.svg";
import { CpfMask } from "../EditProfile/index";
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
} from "./styled";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/signup";

CpfMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function SignUp() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

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
      <ImgLogo src={LogoFutureEats} alt="Logo" />
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
          InputProps={{ inputComponent: CpfMask }}
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
        />
      </InputLocus>

      <InputLocus>
        <LabelPassword htmlFor="password">Senha*</LabelPassword>
        <InputRectangle4
          required
          type={showPassword ? "text" : "password"}
          variant="outlined"
          color="secondary"
          placeholder="Mínimo 6 caracteres"
          pattern="[A-Za-z0-9 ]{6,}"
          name="password"
          value={form.password}
          onChange={handleChange}
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

      <InputLocus>
        <LabelPasswordAgain htmlFor="confirmPassword">
          Confirmar*
        </LabelPasswordAgain>
        <InputRectangle5
          required
          type={showPassword ? "text" : "password"}
          variant="outlined"
          color="secondary"
          placeholder="Confirme a senha anterior"
          pattern="[A-Za-z0-9 ]{6,}"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
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

      <SaveButton variant="contained" color="secondary" onClick={buttonSignUp}>
        Criar
      </SaveButton>
    </Container>
  );
}

export default SignUp;
