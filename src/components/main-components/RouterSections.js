import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "../route-components/WelcomePage";
import ProductsList from "../route-components/ProductsList";
import ProductsMoreInfo from "../route-components/ProductsMoreInfo";
import ShoppingCart from "../route-components/ShoppingCart";
import ShoppingForm from "../route-components/ShoppingForm";
import ErrorPage from "../route-components/ErrorPage";

class RouterSections extends Component {
  state = {};

  render() {
    return (
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/mobile-phones" component={ProductsList} />
        <Route path="/phone" component={ProductsMoreInfo} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/shopping-form" component={ShoppingForm} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default RouterSections;
