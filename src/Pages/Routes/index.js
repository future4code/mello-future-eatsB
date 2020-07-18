import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import AdressPage from "../AdressPage";
import FeedPage from "../FeedPage";
import SearchPage from "../SearchPage";
import RestaurantsPage from "../RestaurantsPage";
import ConfirmationPage from "../ConfirmationPage";
import DoingOrderPage from "../DoingOrderPage";
import ProfilePage from "../ProfilePage";
import ShoppingTrolley from "../ShoppingTrolley";
import LandingPage from "../LandingPage";
import EditAddressPage from "../EditAddressPage";
import EditProfilePage from "../EditProfilePage";
import Footer from "../../Components/Footer/index";
import Header from "../../Components/Header/index";
import EditAddressPage from "../EditAddressPage/index";
import PrivateRoute from "../PrivateRoute/privateUserRoute";
import LoginRoute from "../PrivateRoute/loginRoute";

const Routes = () => {
  return (
    <>
      <Header />
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
          <LoginRoute exact path="/address">
            <AdressPage />
          </LoginRoute>
          <PrivateRoute exact path="/feed">
            <FeedPage />
          </PrivateRoute>
          <PrivateRoute exact path="/search">
            <SearchPage />
          </PrivateRoute>
          <PrivateRoute exact path="/restaurants/:restaurantId">
            <RestaurantsPage />
          </PrivateRoute>
          <PrivateRoute exact path="/confirmation">
            <ConfirmationPage />
          </PrivateRoute>
          <PrivateRoute exact path="/doing">
            <DoingOrderPage />
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
        <Footer />
      </BrowserRouter>
    </>

  );
};

export default Routes;
