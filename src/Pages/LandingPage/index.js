import React from 'react';
import Logo from '../../Assets/img/Logo.png';
import { Container } from './styled';

const LandingPage = () => {
  return (
    <Container>
      <img src={Logo} alt="FutureEats Logo" />
    </Container>
  );
};

export default LandingPage;
