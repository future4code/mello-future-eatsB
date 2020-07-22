import React, { useEffect } from "react";
import Logo from "../../Assets/img/Logo.png";
import { Container } from "./styled";
import { useHistory } from "react-router";

const LandingPage = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/login");
    }, 3000);
  }, [history]);

  return (
    <Container>
      <img src={Logo} alt="FutureEats Logo" />
    </Container>
  );
};

export default LandingPage;
