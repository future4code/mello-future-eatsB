import React from 'react'
import SignUp from '../../Components/SignUp'
import Header from '../../Components/Header'
import { Container } from '@material-ui/core'


const SignUpPage = () => {
  return(
      <Container>
        <Header />
        <SignUp />
      </Container> 
  )
}

export default SignUpPage
