import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import ProfileRestaurants from "../../Components/ProfileRestaurants/index.js";
import MenuBar from "../../Components/MenuBar/MenuBar.js";
import { Container, SearchStyled } from "./styles";

const FeedPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const inputsearch = useRef();

  useEffect(() => {
    const axiosConfig = {
      headers: {
        auth:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRtZUwxQ1FZZHM2Y0FUcm41Qm9sIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTU5NDc1NDA5Mn0.5GNXUVGMLFBcZG7NCWZ-jxuuZfhZog-NaMKc4H0xqk4",
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
      <form onSubmit={handleSearch}>
        <SearchStyled ref={inputsearch} placeholder="Restaurante" />
        <button type="submit">Buscar</button>
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
