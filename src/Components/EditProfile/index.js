import React, { useRef, useContext, useState } from "react";
import {
  Container,
  InputLocus,
  InputRectangle,
  SaveButton,
  ModalContainer,
} from "../Common/Styled";
import Cleave from 'cleave.js/react'
import PropTypes from 'prop-types'
import ProfileContext from "../../Contexts/ProfileContext/context";
import { updateProfile } from "./services";
import { useHistory } from "react-router-dom";
import { CloseRounded } from '@material-ui/icons'
import ModalBody from "../Modal/modal";
import { useForm } from "../../Hooks/useForm";

const CpfMask = props => {
  const { inputRef, ...rest } = props

  return(
    <Cleave
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null)
      }}
      options={{
        blocks: [ 3, 3, 3, 2],
        delimiter: '',
        delimiters: ['.','.','-'],
        numericalOnly: true
      }}
      inputMode='numeric'
      {...rest}
    />
  )
}
CpfMask.propTypes = {
  inputRef: PropTypes.func.isRequired
};

const EditProfile = () => {

  const [ isOpen, setIsOpen ] = useState(false)
  const history = useHistory()

  const { profileData } = useContext(
    ProfileContext
  );

  const myInput = useRef();
  const { form, onChange } = useForm({
    name: profileData.name,
    email: profileData.email,
    cpf: profileData.cpf
  })

  const handleChange = e => {
    const { name, value } = e.target
    onChange(name, value)
  }

  const handleOpen = (bool) => {
    setIsOpen(bool)
  }

  const sendProfileUpdate = async() => {
    await updateProfile(form.name, form.email, form.cpf)
    handleOpen(true)
  }
  const body = (
    <ModalContainer>
      <span onClick={() => history.push('/profile')}> <CloseRounded /> </span>
      <div>Cadastro atualizado com sucesso!</div>
    </ModalContainer>
  )

  return(
    <Container>
      <InputLocus>
        <InputRectangle
          name='name'
          required
          label='Nome'
          variant='outlined'
          value={form.name}
          color='secondary'
          onChange={handleChange}
          InputLabelProps={{shrink: true}}
          />
      </InputLocus>
      <InputLocus>
        <InputRectangle
          name='email'
          required
          label='E-mail'
          variant='outlined'
          value={form.email}
          color='secondary'
          onChange={handleChange}
          InputLabelProps={{shrink: true}}
        />
      </InputLocus>
      <InputLocus>
        <InputRectangle
          label='CPF'
          name='cpf'
          required
          variant='outlined'
          color='secondary'
          onChange={handleChange}
          value={form.cpf}
          inputRef={myInput}
          InputProps={{inputComponent: CpfMask}}
          InputLabelProps={{shrink: true}}
        />
      </InputLocus>

      <SaveButton
        variant='contained'
        color='secondary'
        onClick={sendProfileUpdate}
      >
        Salvar
      </SaveButton>
      <ModalBody 
        open={isOpen}
        close={() => handleOpen(false)}
        body={body}
      />
    </Container>
  )
}
export default EditProfile