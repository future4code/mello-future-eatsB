import React from 'react'
import { Container, Bar, InputLocus, InputRectangle, SaveButton } from '../Common/Styled'
// import { ArrowBackIosRounded } from '@material-ui/icons' // arrow para voltar.

const EditProfile = () => {
  return(
    <Container>
      <Bar>
        Editar
      </Bar>
      <InputLocus>
        <InputRectangle
          required
          label='Nome'
          variant='outlined'
          defaultValue=' '
          />
      </InputLocus>

      <InputLocus>
        <InputRectangle
          required
          label='E-mail'
          variant='outlined'
          defaultValue=' '
        />
      </InputLocus>

        <InputLocus>
      <InputRectangle
        required
        label='CPF'
        variant='outlined'
        defaultValue=' '
      />
      </InputLocus>

      <SaveButton
        variant='contained'>
        Salvar
      </SaveButton>
    </Container>
  )
}

export default EditProfile
