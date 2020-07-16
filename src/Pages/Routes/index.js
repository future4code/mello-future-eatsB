import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Login from "../Login";
import SignUp from "../SignUp";
import AdressPage from "../AdressPage";
import FeedPage from "../FeedPage";
import SearchPage from "../SearchPage";
import RestaurantsPage from "../RestaurantsPage";
import ConfirmationPage from "../ConfirmationPage";
import DoingOrderPage from "../DoingOrderPage";
import ProfilePage from "../ProfilePage";
import ShoppingTrolley from "../ShoppingTrolley";
import LandingPage from "../LandingPage";
import EditProfilePage from "../EditProfilePage";
import EditAddressPage from "../EditAddressPage";
import Footer from "../../Components/Footer/index";
import Header from "../../Components/Header";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/signup">
          <SignUp />
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
