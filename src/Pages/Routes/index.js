import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from "../HomePage";
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
import EditAddress from "../../Components/EditAddress/EditAddress";
import EditProfile from "../../Components/EditProfile/EditProfile";
import LandingPage from "../LandingPage";


const Routes = () => {

  return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>

            <Route exact path="/login">
              <Login/>
            </Route>

            <Route exact path="/signup">
              <SignUp/>
            </Route>
            
            <Route exact path="/endereco">
              <AdressPage/>
            </Route>

            <Route exact path="/feed">
              <FeedPage/>
            </Route>

            <Route exact path="/search">
              <SearchPage/>
            </Route>

            <Route exact path="/restaurants">
              <RestaurantsPage/>
            </Route>

            <Route exact path="/confirmation">
              <ConfirmationPage/>
            </Route>

            <Route exact path="/doing">
              <DoingOrderPage/>
            </Route>

            <Route exact path="/carrinho">
              <ShoppingTrolley/>
            </Route>

            <Route exact path="/profile">
              <ProfilePage/>
            </Route>

            <Route exact path="/editaddress">
              <EditAddress/>
            </Route>

            <Route exact path="/editprofile">
              <EditProfile/>
            </Route>

            <Route exact path="/landing">
              <LandingPage/>
            </Route>
        </Switch>
        
      </BrowserRouter>
    
  );
};

export default Routes;