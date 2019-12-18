import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "../route-components/WelcomePage";
import ProductsList from "../route-components/ProductsList";
import ProductsMoreInfo from "../route-components/ProductsMoreInfo";
import ShoppingCart from "../route-components/ShoppingCart";
import ShoppingForm from "../route-components/ShoppingForm";
import ErrorPage from "../route-components/ErrorPage";
import ErrorData from "../route-components/ErrorData";
import LoadingData from "../route-components/LoadingData";

class RouterSections extends Component {
  state = {
    dataPhone: [],
    loadingDataPhone: false,
    errorDataPhone: false,
    productIdMoreInfo: ""
  };

  componentDidMount() {
    this.handleGetDataPhone();
  }

  handleGetDataPhone = async () => {
    this.setState({
      loadingDataPhone: true
    });

    try {
      const response = await fetch("./data/products.json");
      const data = await response.json();

      if (!response.ok) {
        throw new Error();
      }

      return this.setState({
        dataPhone: data,
        loadingDataPhone: false
      });
    } catch (err) {
      return this.setState({
        errorDataPhone: true,
        loadingDataPhone: false
      });
    }
  };

  handleOpenMoreInfo = id => {
    this.setState({
      productIdMoreInfo: id
    });
  };

  render() {
    if (this.state.errorDataPhone) {
      return <ErrorData />;
    }

    if (this.state.loadingDataPhone) {
      return <LoadingData />;
    }

    const { dataPhone } = this.state;

    return (
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route
          path="/mobile-phones"
          render={() => {
            return (
              <ProductsList
                dataPhone={dataPhone}
                handleOpenMoreInfo={this.handleOpenMoreInfo}
              />
            );
          }}
        />
        <Route path="/phone" component={ProductsMoreInfo} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/shopping-form" component={ShoppingForm} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default RouterSections;
