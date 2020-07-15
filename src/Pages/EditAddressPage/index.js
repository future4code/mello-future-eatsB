import React from 'react'
import Header from '../../Components/Header'
import EditAddress from '../../Components/EditAddress'
import { Container } from './Styled'

const EditAddressPage = () => {
  return(
    <Container>
      <Header
        title='Endereço'
      />
      <EditAddress />
    </Container>
  )
}

export default EditAddressPage