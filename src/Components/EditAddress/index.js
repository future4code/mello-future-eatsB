import React from 'react'
import { Container, Bar, InputLocus, InputRectangle, SaveButton } from '../Common/Styled'

const EditAddress = () => {
  return(
    <Container>
      <InputLocus>
        <InputRectangle
          required
          label='Logradouro'
          variant='outlined'
          defaultValue=' '
          />
      </InputLocus>

      <InputLocus>
        <InputRectangle
          required
          label='Número'
          variant='outlined'
          defaultValue=' '
        />
      </InputLocus>

        <InputLocus>
      <InputRectangle
        label='Complemento'
        variant='outlined'
        defaultValue=' '
      />
      </InputLocus>

      <InputLocus>
      <InputRectangle 
        required
        label='Bairro'
        variant='outlined'
        defaultValue=' '
      />
      </InputLocus>

      <InputLocus>
        <InputRectangle 
          required
          label='Cidade'
          variant='outlined'
          defaultValue=' '
        />
      </InputLocus>
      <InputLocus>
        <InputRectangle 
          required
          label='Estado'
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

export default EditAddress
