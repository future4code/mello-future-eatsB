import React from 'react'
import { Container, SingleIcon } from './Styled'
import cartIcon from '../../Assets/img/Cart.svg'
import profileIcon from '../../Assets/img/Profile.svg'
import homeIcon from '../../Assets/img/Home.svg'



const Footer = () => {
  return(
    <Container>
      <SingleIcon>
        <img src={homeIcon} alt='Icone Home' />
      </SingleIcon>

      <SingleIcon>
      <img src={cartIcon} alt='Icone Home' />
      </SingleIcon>

      <SingleIcon>
      <img src={profileIcon} alt='Icone Home' />
      </SingleIcon>
    </Container>
  )
}

export default Footer