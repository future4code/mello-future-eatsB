import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import SearchCard from "../../Components/SearchCard/SearchCard.js";
import ProfileRestaurants from "../../Components/ProfileRestaurants/index.js";
import MenuBar from "../../Components/MenuBar/MenuBar.js";
import styled from "styled-components";
import FiltersContext from "../../Contexts/Filters";

const MainContainer = styled.div`
  width: 360px;
  height: 640px;
`

const FeedPage = (props) => {

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB"
  const [restaurants, setRestaurants] = useState([])
  const {filters, dispatch} = useContext(FiltersContext)

  /*FILTRO */  

  const filteredRestaurants = restaurants.filter((restaurants) => {
    if(restaurants.name.includes(filters.name)) {
      return true;
    }

    return false;
});

/*COLOQUEI UM TOKEN PARA TESTAR */

useEffect(()=>{
   const axiosConfig = {
    headers: {
        auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRtZUwxQ1FZZHM2Y0FUcm41Qm9sIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTU5NDc1NDA5Mn0.5GNXUVGMLFBcZG7NCWZ-jxuuZfhZog-NaMKc4H0xqk4" ,
    }
};
  axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/restaurants", axiosConfig).then(response=>{
   
    setRestaurants(response.data.restaurants)
  })
  
},[])
 

  return (

  <MainContainer>
      <SearchCard/>
      <MenuBar/>
      {filteredRestaurants.map(restaurant=> {
        return <ProfileRestaurants restaurants={restaurant}/>
      })}
  </MainContainer>  
  );
};

export default FeedPage;