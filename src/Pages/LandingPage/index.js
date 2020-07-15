import React from 'react'
import Logo from '../../Assets/img/Logo.png'
import { Container } from './Styled'

const LandingPage = () => {
  return (
    <Container>
      <img src={Logo} alt='FutureEats Logo' />
    </Container>
  )
}

export default LandingPage