import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";
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

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/address">
          <AdressPage />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
        <Route exact path="/restaurants/:restaurantId">
          <RestaurantsPage />
        </Route>
        <Route exact path="/confirmation">
          <ConfirmationPage />
        </Route>
        <Route exact path="/doing">
          <DoingOrderPage />
        </Route>
        <Route exact path="/carrinho">
          <ShoppingTrolley />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/editprofile">
          <EditProfilePage />
        </Route>
        <Route exact path="/editaddress">
          <EditAddressPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
