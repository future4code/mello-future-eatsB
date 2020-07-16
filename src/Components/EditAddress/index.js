import React, { useState } from "react";
import {
  Container,
  InputLocus,
  InputRectangle,
  SaveButton,
  ModalContainer,
} from "../Common/Styled";
import { useHistory } from "react-router-dom";
import { CloseRounded } from '@material-ui/icons'
import ModalBody from "../Modal/modal";
import { updateAddress } from './services'
import { useForm } from "../../Hooks/useForm";

const EditAddress = () => {

  const [ isOpen, setIsOpen ] = useState(false)
  const history = useHistory()

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

  const handleOpen = (bool) => {
    setIsOpen(bool)
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

    handleOpen(true)
  }
  const body = (
    <ModalContainer>
      <span onClick={() => history.push('/profile')}> <CloseRounded /> </span>
      <div>Endereço atualizado com sucesso.</div>
    </ModalContainer>
  )
  
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
          label='Número'
          variant='outlined'
          value={form.number}
          color='secondary'
          onChange={handleChange}
          placeholder='Ex. 0'
          inputProps={{min: 0, inputMode: 'numeric'}}
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

      <ModalBody 
        open={isOpen}
        close={() => handleOpen(false)}
        body={body}
      />
    </Container>
  )
}

export default EditAddress
