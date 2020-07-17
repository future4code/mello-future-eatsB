import React from 'react'
import Login from '../../Components/Login'
import Header from '../../Components/Header'
import { Container } from '@material-ui/core'

const LoginPage = () => {
  return(
      <Container>
        <Header />
        <Login />
      </Container> 
  )
}

export default LoginPage