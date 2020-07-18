import React, { useEffect, useState } from "react";
import futureEats from "../../Services/futureEats";
import OrderItem from "../../Components/OrderItem/index";
import { Container } from "./styles";
import Pen from "../../Assets/img/pen.svg";
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [ordersHistory, setOrdersHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    getProfile();
    getOrders();
  }, []);

  const getProfile = async () => {
    try {
      const response = await futureEats.get("/profile", {
        headers: {
          auth: String(localStorage.getItem("token")),
        },
      });
      setLoading(false);
      setProfile(response.data.user);
    } catch (error) {}
  };

  const getOrders = async () => {
    try {
      const response = await futureEats.option("/orders/history", {
        headers: {
          auth: String(localStorage.getItem("token")),
        },
      });
      setLoading(false);
      setOrdersHistory(response.data.orders);
    } catch (error) {}
  };

  const routeUser = (id) => () => {
    switch (id) {
      case 1:
        return history.push("/editprofile");
      case 2:
        return history.push("/editaddress");

      default:
        break;
    }
  };

  return (
    <Container>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <>
          <div id="userData">
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.cpf}</p>
            <p id="edit">
              <img src={Pen} onClick={routeUser(1)} alt="edit" />
            </p>
          </div>

          <div id="address">
            <p>Endereço cadastrado</p>
            <p>{profile.address}</p>
            <p id="edit">
              <img src={Pen} onClick={routeUser(2)} alt="edit" />
            </p>
          </div>

          <div id="orderBox">
            <p>Histórico de pedidos</p>
            {ordersHistory &&
              ordersHistory.map((order) => (
                <OrderItem place="" date="" subtotal="" />
              ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default ProfilePage;
