import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
/* import useProtectedPage from "../../Hooks/UseProtectedPage" */
import { EditAddressContainer, Bar } from "../../Components/Common/Styled";
import { Container } from "../../Components/Common/Styled";
import Header from "../../Components/Header";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB";

const RestaurantsPage = () => {
  /* useProtectedPage();
   */
  const [products, setProducts] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const [category, setCategory] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [shippingPrice, setShippingPrice] = useState("");
  const [restaurantAddress, setRestaurantAddress] = useState("");

  const { restaurantId } = useParams();

  useEffect(() => {
    getRestaurantDetail();
    //eslint-disable-next-line
  }, []);

  const getRestaurantDetail = async () => {
    const axiosConfig = {
      headers: {
        auth:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpXdFp0TjN5QUwzRG40OE96ZkU1IiwibmFtZSI6Ik1hcmlhIiwiZW1haWwiOiJtYXJpYUBnbWFpbC5jb20iLCJjcGYiOiIxMTEuMjIyLjMzMy00NCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJBdi4gQW5nw6lsaWNhLCAxODE0LCAzMDUgLSBIaWdpZW7Ds3BvbGlzIiwiaWF0IjoxNTk0NzcyNzExfQ.9812N7XBG1cLsRAzM-RmIIyKrrBI7LYpfJp2Q1TSVAY",
      },
    };

    console.log(axiosConfig);

    try {
      const response = await axios.get(
        `${baseUrl}/restaurants/${restaurantId}`,
        axiosConfig
      );
      setProducts(response.data.restaurant.products);
      setRestaurantName(response.data.restaurant.name);
      setCategory(response.data.restaurant.category);
      setDeliveryTime(response.data.restaurant.deliveryTime);
      setShippingPrice(response.data.restaurant.shipping);
      setRestaurantAddress(response.data.restaurant.address);
      console.log(response.data.restaurant.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header title="Feed" />
      <h3>{restaurantName}</h3>
      <p>{category}</p>
      <p>
        {deliveryTime} min Frete R${shippingPrice}
      </p>
      <p>{restaurantAddress}</p>
      {products &&
        products.map((product) => {
          return (
            <div>
              <div>{product.category}</div>
              <img src={product.photoUrl} width="80" alt="Food" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>R${product.price}</p>
            </div>
          );
        })}
    </Container>
  );
};

export default RestaurantsPage;
