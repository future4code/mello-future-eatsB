import React from "react";
import {
  Container,
  InputLocus,
  InputRectangle,
  SaveButton,
} from "../Common/Styled";
import { updateAddress } from './services'
import { useForm } from "../../Hooks/UseForm";

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

  const sendAddressUpdate = async() => {
    await updateAddress(
      form.street, 
      form.number, 
      form.neighbourhood, 
      form.city, 
      form.state, 
      form.complement
    )
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
          InputLabelProps={{shrink: true}}
          />
      </InputLocus>

      <InputLocus>
        <InputRectangle
          name='number'
          required
          inputProps={{min: 0, inputMode: 'numeric'}}
          type='number'
          label='Número'
          variant='outlined'
          value={form.number}
          color='secondary'
          onChange={handleChange}
          placeholder='Ex. 0'
          InputLabelProps={{shrink: true}}
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
        InputLabelProps={{shrink: true}}
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
        InputLabelProps={{shrink: true}}
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
          InputLabelProps={{shrink: true}}
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
          InputLabelProps={{shrink: true}}
        />
      </InputLocus>

      <SaveButton
        variant='contained'
        color='secondary'
        onClick={sendAddressUpdate}
      >
        Salvar
      </SaveButton>
    </Container>
  )
}

export default EditAddress
