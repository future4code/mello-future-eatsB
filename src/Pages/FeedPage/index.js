import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ProfileRestaurants from "../../Components/ProfileRestaurants/index.js";
import MenuBar from "../../Components/MenuBar/MenuBar.js";
import Search from "../../Assets/img/Search.svg";
import {
  Container,
  TextBar,
  SearchStyled,
  ImgSearch,
  ButtonSearch,
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
      <TextBar>FutureEats</TextBar>
      <form onSubmit={handleSearch}>
        <SearchStyled ref={inputsearch} placeholder="Restaurante" />
        <ImgSearch src={Search} alt="SearchIcon" />
        <ButtonSearch type="submit">Buscar</ButtonSearch>
      </form>
      <div>
        <MenuBar />
      </div>

      {restaurants.map((restaurant) => {
        if (search === "" || restaurant.name.includes(search)) {
          return <ProfileRestaurants restaurants={restaurant} />;
        }
      })}
    </Container>
  );
};

export default FeedPage;
