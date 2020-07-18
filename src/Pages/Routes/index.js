import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import AdressPage from "../AdressPage";
import FeedPage from "../FeedPage";
import RestaurantsPage from "../RestaurantsPage";
import ConfirmationPage from "../ConfirmationPage";
import ProfilePage from "../ProfilePage";
import ShoppingTrolley from "../ShoppingTrolley";
import LandingPage from "../LandingPage";
import EditAddressPage from "../EditAddressPage";
import EditProfilePage from "../EditProfilePage";
import Footer from "../../Components/Footer/index";
import Header from "../../Components/Header/index";
import PrivateRoute from "../PrivateRoute/privateUserRoute";
import LoginRoute from "../PrivateRoute/loginRoute";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <LoginRoute exact path="/">
            <LandingPage />
          </LoginRoute>
          <LoginRoute exact path="/login">
            <LoginPage />
          </LoginRoute>
          <LoginRoute exact path="/signup">
            <SignUpPage />
          </LoginRoute>
           <Header />
          <LoginRoute exact path="/address">
            <AdressPage />
          </LoginRoute>
          <PrivateRoute exact path="/feed">
            <FeedPage />
          </PrivateRoute>
          <PrivateRoute exact path="/restaurants/:restaurantId">
            <RestaurantsPage />
          </PrivateRoute>
          <PrivateRoute exact path="/confirmation">
            <ConfirmationPage />
          </PrivateRoute>
          <PrivateRoute exact path="/carrinho">
            <ShoppingTrolley />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <ProfilePage />
          </PrivateRoute>
          <PrivateRoute exact path="/editprofile">
            <EditProfilePage />
          </PrivateRoute>
          <PrivateRoute exact path="/editaddress">
            <EditAddressPage />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
