import React from "react";
import { Bar, BarContent, Title } from "./Styled";
import { ArrowBackIosRounded } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  const routeUser = () => {
    history.goBack();
  };

  return (
    <Bar>
      <BarContent>
        <ArrowBackIosRounded onClick={routeUser} />
      </BarContent>
      <Title>{props.title}</Title>

      <BarContent></BarContent>
    </Bar>
  );
};

export default Header;
