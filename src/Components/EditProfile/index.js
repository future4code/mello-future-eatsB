<<<<<<< HEAD:src/Components/EditProfile/EditProfile.js
import React from "react";
import {
  EditAddressContainer,
  Bar,
  InputLocus,
  InputRectangle,
  SaveButton,
} from "../Common/Styled";
// import { ArrowBackIosRounded } from '@material-ui/icons' // arrow para voltar.

const EditProfile = () => {
  return (
    <EditAddressContainer>
      <Bar>Editar</Bar>
=======
import React from 'react'
import { Container, Bar, InputLocus, InputRectangle, SaveButton } from '../Common/Styled'
// import { ArrowBackIosRounded } from '@material-ui/icons' // arrow para voltar.

const EditProfile = () => {
  return(
    <Container>
>>>>>>> c0e6c1b8d57af70ddfc73fd7be6bf5b50d50efc2:src/Components/EditProfile/index.js
      <InputLocus>
        <InputRectangle
          required
          label="Nome"
          variant="outlined"
          defaultValue=" "
        />
      </InputLocus>

      <InputLocus>
        <InputRectangle
          required
          label="E-mail"
          variant="outlined"
          defaultValue=" "
        />
      </InputLocus>

      <InputLocus>
        <InputRectangle
          required
          label="CPF"
          variant="outlined"
          defaultValue=" "
        />
      </InputLocus>

<<<<<<< HEAD:src/Components/EditProfile/EditProfile.js
      <SaveButton variant="contained">Salvar</SaveButton>
    </EditAddressContainer>
  );
};
=======
      <SaveButton
        variant='contained'>
        Salvar
      </SaveButton>
    </Container>
  )
}
>>>>>>> c0e6c1b8d57af70ddfc73fd7be6bf5b50d50efc2:src/Components/EditProfile/index.js

export default EditProfile;
