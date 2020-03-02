import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./home-page";
import Cart from "./cart";
const MyCart = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <HomePage {...props} />} />
        <Route path = "/view-cart"  render={props => <Cart {...props} />} />
      </Switch>
    </BrowserRouter>
  );
};
export default MyCart;
