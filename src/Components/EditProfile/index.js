import React, { useRef, useEffect } from 'react'
import { Container, InputLocus, InputRectangle, SaveButton } from '../Common/Styled'
import { useForm } from '../../Hooks/useForm'
import PropTypes from 'prop-types'
import Cleave from 'cleave.js/react'


const EditProfile = () => {
  const myInput = useRef();
  useEffect(() => myInput.current && myInput.current.focus());

  const { form, onChange } = useForm({
    name: '',
    email: '',
    cpf: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    onChange(name, value)
  }

  const MaskedInput = props => {
    const { inputRef, ...rest } = props
    return(
      <Cleave
        inputRef={myInput}
        options={{
          blocks: [ 3, 3, 3, 2],
          delimiters: ['.','.','-']
        }}
        {...rest}
        inputMode='numeric'
      />
    )
  }

  MaskedInput.propTypes = {
    inputRef: PropTypes.func.isRequired
  };

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
          value= {form.cpf}
          onChange={handleChange}
          inputRef={myInput}
          InputProps={{inputComponent: MaskedInput}}
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

export default EditProfile
