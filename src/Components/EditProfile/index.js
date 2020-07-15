import React, { useRef } from "react";
import {
  Container,
  InputLocus,
  InputRectangle,
  SaveButton,
} from "../Common/Styled";
import { useForm } from '../../Hooks/useForm'
import Cleave from 'cleave.js/react'
import PropTypes from 'prop-types'

const CpfMask = props => {
  const { inputRef, ...rest } = props
  return(
    <Cleave
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null)
      }}
      options={{
        blocks: [ 3, 3, 3, 2],
        delimiters: ['.','.','-']
      }}
      {...rest}
      inputMode='numeric'
    />
  )
}
CpfMask.propTypes = {
  inputRef: PropTypes.func.isRequired
};

const EditProfile = () => {

  const myInput = useRef();
  const { form, onChange } = useForm({
    name: '',
    email: '',
    cpf: ''
  })
  const handleChange = e => {
    const { name, value } = e.target
    onChange(name, value)
  }

  return(
    <Container>
      <InputLocus>
        <InputRectangle
          name= 'name'
          required
          label='Nome'
          variant='outlined'
          value={form.name}
          color='secondary'
          onChange={handleChange}
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
        />
      </InputLocus>
      <InputLocus>
        <InputRectangle
          name='cpf'
          required
          label='CPF'
          variant='outlined'
          color='secondary'
          placeholder='000.000.000-00'
          value={form.cpf}
          onChange={handleChange}
          inputRef={myInput}
          InputProps={{inputComponent: CpfMask}}
        />
      </InputLocus>
      <SaveButton
        variant='contained'
        color='secondary'
        onClick={() => console.log(form.name + ' + ' + form.email + ' + ' + form.cpf)}
      >
        Salvar
      </SaveButton>
    </Container>
  )
}

export default EditProfile;
