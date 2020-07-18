import React from "react";
import {
  Container,
  Bar,
  BackImg,
  TextAddress,
  InputLocus,
  InputRectangle1,
  InputRectangle2,
  InputRectangle3,
  InputRectangle4,
  InputRectangle5,
  InputRectangle6,
  SaveButton,
} from "../Common/styled";
import { useHistory } from "react-router-dom";
import { updateAddress } from './services';
import useForm from "../../Hooks/useForm";
import Back from "../../Assets/img/Back.svg";

const EditAddress = () => {
  const history = useHistory();

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
  
  const backToLogin = () => {
    history.push("/login");
  };

  return(
    <Container>
      <Bar>
        <BackImg onClick={backToLogin} src={Back} alt="Drop Right" />
      </Bar>
      <TextAddress>Meu endereço</TextAddress>
      <InputLocus>
        <InputRectangle1
          name='street'
          required
          label='Logradouro'
          variant='outlined'
          value={form.street}
          color='secondary'
          onChange={handleChange}
          placeholder='Rua/Av.'
          InputLabelProps={{shrink: true}}
          />
      </InputLocus>

      <InputLocus>
        <InputRectangle2
          name='number'
          required
          inputProps={{min: 0, inputMode: 'numeric'}}
          type='number'
          label='Número'
          variant='outlined'
          value={form.number}
          color='secondary'
          onChange={handleChange}
          placeholder='Número'
          InputLabelProps={{shrink: true}}
        />
      </InputLocus>

        <InputLocus>
      <InputRectangle3
        name='complement'
        label='Complemento'
        variant='outlined'
        value={form.complement}
        color='secondary'
        onChange={handleChange}
        placeholder='Apto./Bloco'
        InputLabelProps={{shrink: true}}
      />
      </InputLocus>

      <InputLocus>
      <InputRectangle4 
        name='neighbourhood'
        required
        label='Bairro'
        variant='outlined'
        value={form.neighbourhood}
        color='secondary'
        onChange={handleChange}
        placeholder='Bairro'
        InputLabelProps={{shrink: true}}
      />
      </InputLocus>

      <InputLocus>
        <InputRectangle5
          name='city'
          required
          label='Cidade'
          variant='outlined'
          value={form.city}
          color='secondary'
          onChange={handleChange}
          placeholder='Cidade'
          InputLabelProps={{shrink: true}}
        />
      </InputLocus>

      <InputLocus>
        <InputRectangle6 
          name='state'
          required
          label='Estado'
          variant='outlined'
          value={form.state.toUpperCase()}
          color='secondary'
          onChange={handleChange}
          inputProps={{maxLength: 2}}
          placeholder='Estado'
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

export default EditAddress;
