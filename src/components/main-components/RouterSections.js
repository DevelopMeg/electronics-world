import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "../route-components/WelcomePage";
import ProductsList from "../route-components/ProductsList";
import ProductsInfo from "../route-components/ProductsInfo";
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
    productIdMoreInfo: "",
    orderPosition: [],
    totalPriceCart: 0,
    formInfoId: []
  };

  componentDidMount() {
    this.handleGetDataPhone();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.orderPosition !== this.state.orderPosition) {
      if (this.state.orderPosition.length !== 0) {
        const prices = this.state.orderPosition.map(order => {
          return order.totalPrice;
        });

        const priceCart = prices.reduce((a, b) => {
          return a + b;
        });

        const totalPriceCart = priceCart.toFixed(2);

        this.setState({
          totalPriceCart
        });
      }
    }
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

  handleAddProductToCart = (
    id,
    name,
    color,
    capacity,
    price,
    totalPrice,
    extraCostColor,
    extraCostCapacity
  ) => {
    const order = {
      name,
      color,
      capacity,
      price,
      totalPrice,
      extraCostColor,
      extraCostCapacity
    };

    this.setState(prevState => ({
      orderPosition: [...prevState.orderPosition, order]
    }));
  };

  handleInfoIdForm = (
    idProduct,
    colorsId,
    capacitiesId,
    colorId,
    capacityId,
    totalPrice
  ) => {
    const infoId = {
      idProduct,
      colorsId,
      capacitiesId,
      colorId,
      capacityId,
      totalPrice
    };

    this.setState(prevState => ({
      formInfoId: [...prevState.formInfoId, infoId]
    }));
  };

  handleBuyAgain = () => {
    this.setState({
      productIdMoreInfo: "",
      orderPosition: [],
      totalPriceCart: 0,
      formInfoId: []
    });
  };

  render() {
    if (this.state.errorDataPhone) {
      return <ErrorData />;
    }

    if (this.state.loadingDataPhone) {
      return <LoadingData />;
    }

    const {
      dataPhone,
      productIdMoreInfo,
      orderPosition,
      totalPriceCart,
      formInfoId
    } = this.state;

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
                orderPosition={orderPosition}
              />
            );
          }}
        />
        <Route
          path={`/phone-${productIdMoreInfo}`}
          render={() => {
            const filterPhones = dataPhone.filter(phone => {
              return phone.id === productIdMoreInfo;
            });

            return (
              <ProductsInfo
                phone={filterPhones[0]}
                handleAddProductToCart={this.handleAddProductToCart}
                handleInfoIdForm={this.handleInfoIdForm}
                orderPosition={orderPosition}
              />
            );
          }}
        />
        <Route
          path="/shopping-cart"
          render={() => {
            return (
              <ShoppingCart
                orderPosition={orderPosition}
                totalPriceCart={totalPriceCart}
              />
            );
          }}
        />
        <Route
          path="/shopping-form"
          render={() => {
            return (
              <ShoppingForm
                formInfoId={formInfoId}
                handleBuyAgain={this.handleBuyAgain}
              />
            );
          }}
        />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default RouterSections;
