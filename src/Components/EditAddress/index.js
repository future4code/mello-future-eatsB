import React from 'react'
import { 
  Container, 
  InputLocus, 
  InputRectangle, 
  SaveButton 
} from '../Common/Styled'
import { useForm } from '../../Hooks/useForm'
import Cleave from 'cleave.js/react'

const EditAddress = () => {

  const { form, onChange } = useForm({
    street: '',
    number: '',
    neighbourhood: '',
    city: '',
    state: '',
    complement: ''
  })
  const handleChange = e => {
    const { name, value } = e.target
    onChange(name, value)
  }
  
  return(
    <Container>
      <InputLocus>
        <InputRectangle
          name='street'
          required
          label='Logradouro'
          variant='outlined'
          value={form.street}
          color='secondary'
          onChange={handleChange}
          />
      </InputLocus>

      <InputLocus>
        <InputRectangle
          name='number'
          required
          label='Número'
          variant='outlined'
          value={form.number}
          color='secondary'
          onChange={handleChange}
          placeholder='Ex. 0'
          inputProps={{min: 0, inputMode: 'numeric'}}
        />
      </InputLocus>

        <InputLocus>
      <InputRectangle
        name='complement'
        label='Complemento'
        variant='outlined'
        value={form.complement}
        color='secondary'
        onChange={handleChange}
        placeholder='Ex. apto/bloco'
      />
      </InputLocus>

      <InputLocus>
      <InputRectangle 
        name='neighbourhood'
        required
        label='Bairro'
        variant='outlined'
        value={form.neighbourhood}
        color='secondary'
        onChange={handleChange}
      />
      </InputLocus>

      <InputLocus>
        <InputRectangle 
          name='city'
          required
          label='Cidade'
          variant='outlined'
          value={form.city}
          color='secondary'
          onChange={handleChange}
        />
      </InputLocus>
      <InputLocus>
        <InputRectangle 
          name='state'
          required
          label='Estado'
          variant='outlined'
          value={form.state.toUpperCase()}
          color='secondary'
          onChange={handleChange}
          inputProps={{maxLength: 2}}
          placeholder='Ex. SP'
        />
      </InputLocus>

      <SaveButton
        variant='contained'
        color='secondary'
      >
        Salvar
      </SaveButton>
    </Container>
  )
}

export default EditAddress
