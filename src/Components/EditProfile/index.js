import React, { useRef, useContext } from "react";
import Back from "../../Assets/img/Back.svg";
import { useHistory } from "react-router";
import {
  Container,
  Bar,
  BackImg,
  TextBar,
  InputLocus,
  InputRectangle1,
  InputRectangle2,
  InputRectangle3,
  SaveButton,
 
} from "./styled";
import Cleave from "cleave.js/react";
import PropTypes from "prop-types";
import ProfileContext from "../../Contexts/ProfileContext/context";
import useForm from "../../Hooks/useForm";
import { updateProfile } from "./services";

export const CpfMask = (props) => {
  const { inputRef, ...rest } = props;

  return (
    <Cleave
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      options={{
        blocks: [3, 3, 3, 2],
        delimiter: "",
        delimiters: [".", ".", "-"],
        numericalOnly: true,
      }}
      inputMode="numeric"
      {...rest}
    />
  );
};

CpfMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const EditProfile = () => {
  const { profileData } = useContext(ProfileContext);

  const history = useHistory();
  const myInput = useRef();

  const { form, onChange } = useForm({
    name: profileData.name,
    email: profileData.email,
    cpf: profileData.cpf,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const handleUpdate = () => {
    updateProfile(form.name, form.email, form.cpf);
  };

  const backToProfile = () => {
    history.push("/profile");
  };

  return (
    <Container>
      <Bar>
      <BackImg onClick={backToProfile} src={Back} alt="Drop Right" />
        <TextBar>Editar</TextBar>
      </Bar>
      <InputLocus>
        <InputRectangle1
          name="name"
          required
          label="Nome"
          variant="outlined"
          value={form.name}
          color="secondary"
          onChange={handleChange}
          placeholder="Nome e sobrenome"
        />
      </InputLocus>
      <InputLocus>
        <InputRectangle2
          name="email"
          required
          label="E-mail"
          variant="outlined"
          value={form.email}
          color="secondary"
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
      </InputLocus>
      <InputLocus>
        <InputRectangle3
          label="CPF"
          name="cpf"
          required
          variant="outlined"
          color="secondary"
          onChange={handleChange}
          value={form.cpf}
          inputRef={myInput}
          InputProps={{ inputComponent: CpfMask }}
          InputLabelProps={{ shrink: true }}
        />
      </InputLocus>
      <SaveButton variant="contained" color="secondary" onClick={handleUpdate}>
        Salvar
      </SaveButton>
    </Container>
  );
};

export default EditProfile;
