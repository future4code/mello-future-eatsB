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
// import LandingPage from "../LandingPage"
import EditAddressPage from "../EditAddressPage";
import EditProfilePage from "../EditProfilePage";


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
              <EditAddressPage/>
            </Route>

            <Route exact path="/editprofile">
              <EditProfilePage />
            </Route>
        </Switch>
        
      </BrowserRouter>
    
  );
};

export default Routes;