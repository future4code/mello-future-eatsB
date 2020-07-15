import React from 'react'
import { Container, InputLocus, InputRectangle, SaveButton } from '../Common/Styled'
import { useForm } from '../../Hooks/useForm'
import { Tooltip } from '@material-ui/core'


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
          onChange={handleChange}
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
          onChange={handleChange}
          placeholder='Ex. 5'
        />
      </InputLocus>

        <InputLocus>
      <InputRectangle
        name='complement'
        label='Complemento'
        variant='outlined'
        value={form.complement}
        onChange={handleChange}
        placeholder='Ex. apto./bloco'
      />
      </InputLocus>

      <InputLocus>
      <InputRectangle 
        name='neighbourhood'
        required
        label='Bairro'
        variant='outlined'
        value={form.neighbourhood}
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
          onChange={handleChange}
        />
      </InputLocus>

      <InputLocus>
        <Tooltip 
          title='Utiliza as siglas do estado' 
          placement='left' 
          enterTouchDelay= {30}
          arrow
        >
          <InputRectangle 
            name='state'
            required
            label='Estado'
            variant='outlined'
            value={form.state.toUpperCase()}
            onChange={handleChange}
            inputProps={{maxLength: 2}}
          />
        </Tooltip>
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
