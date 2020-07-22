import React from "react";
import { Container, SingleIcon } from "./styled";
import cartIcon from "../../Assets/img/Cart.svg";
import profileIcon from "../../Assets/img/Profile.svg";
import homeIcon from "../../Assets/img/Home.svg";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();

  const routeUser = (action) => () => {
    switch (action) {
      case 1:
        return history.push("/feed");

      case 2:
        return history.push("/carrinho");

      case 3:
        return history.push("/profile");
      default:
        break;
    }
  };

  return (
    <Container>
      <SingleIcon onClick={routeUser(1)}>
        <img src={homeIcon} alt="Icone Home" />
      </SingleIcon>

      <SingleIcon onClick={routeUser(2)}>
        <img src={cartIcon} alt="Icone Home" />
      </SingleIcon>

      <SingleIcon onClick={routeUser(3)}>
        <img src={profileIcon} alt="Icone Home" />
      </SingleIcon>
    </Container>
  );
};

export default Footer;
