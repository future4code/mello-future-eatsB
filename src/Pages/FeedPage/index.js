import React, { useEffect, useState } from "react";
import ProfileRestaurants from "./ProfileRestaurants.js";
import axios from "axios";



const FeedPage = () => {

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB"
  const [restaurants, setRestaurants] = useState([])
  

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

  <div>
    {restaurants.map(restaurant=> {
      return <ProfileRestaurants restaurants={restaurant}/>
    })}
  </div>  
    
    
   
  );
};

export default FeedPage;