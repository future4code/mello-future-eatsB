import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ProfileRestaurants from "../../Components/ProfileRestaurants/index.js";
import MenuBar from "../../Components/MenuBar/MenuBar.js";
import Search from "../../Assets/img/Search.svg";
import {
  Container,
  Bar,
  TextBar,
  SearchStyled,
  ImgSearch,
  ButtonSearch,
  DivMenuBar
} from "./styled";

const FeedPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const inputsearch = useRef();

  useEffect(() => {
    const axiosConfig = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/restaurants",
        axiosConfig
      )
      .then((response) => {
        setRestaurants(response.data.restaurants);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(inputsearch.current.value);
  };

  return (
    <Container>
      <Bar>
        <TextBar>FutureEats</TextBar>
      </Bar>
      <form onSubmit={handleSearch}>
        <SearchStyled ref={inputsearch} placeholder="Restaurante" />
        <ImgSearch src={Search} alt="SearchIcon" />
        <ButtonSearch type="submit">Buscar</ButtonSearch>
      </form>
      <DivMenuBar>
        <MenuBar />
      </DivMenuBar>

      {restaurants.map((restaurant) => {
        if (search === "" || restaurant.name.includes(search)) {
          return <ProfileRestaurants key={restaurant.id} restaurants={restaurant} />;
        }
      })}
    </Container>
  );
};

export default FeedPage;
