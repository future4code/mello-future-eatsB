import React from 'react'
import { Container } from './Styled'
import Header from '../../Components/Header'
import EditProfile from '../../Components/EditProfile'

const EditProfilePage = () => {
  return(
    <Container>
      <Header 
        title='Editar'
      />
      <EditProfile />
    </Container>
  )
}

export default EditProfilePage