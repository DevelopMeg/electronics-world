import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ProductsInfo extends Component {
  state = {
    colorsArr: [],
    capacitiesArr: [],
    productPrice: 0,
    productTotalPrice: 0,
    productColor: "",
    productCapacity: "",
    extraCostColor: 0,
    extraCostCapacity: 0,
    colorsId: "",
    capacitiesId: "",
    chooseColorId: "",
    chooseCapacityId: ""
  };

  componentDidMount() {
    this.handleCreateProductParameters();
  }

  handleCreateProductParameters = () => {
    const { options, price } = this.props.phone;

    let colorsArr = [];
    let capacitiesArr = [];

    let colorsId = "";
    let capacitiesId = "";

    options.forEach(option => {
      if (option.name === "Color") {
        colorsId = option.id;
      } else if (option.name === "Capacity") {
        capacitiesId = option.id;
      }

      option.values.forEach(value => {
        if (option.name === "Color") {
          colorsArr.push(value);
        } else if (option.name === "Capacity") {
          capacitiesArr.push(value);
        }
      });
    });

    this.setState({
      colorsId,
      capacitiesId,
      productPrice: price,
      colorsArr,
      capacitiesArr
    });
  };

  handleChooseColor = (id, color, extraCost) => {
    this.setState({
      chooseColorId: id,
      productColor: color,
      extraCostColor: extraCost
    });
  };

  handleChooseCapacity = (id, capacity, extraCost) => {
    this.setState({
      chooseCapacityId: id,
      productCapacity: capacity,
      extraCostCapacity: extraCost
    });
  };

  handleTotalPrice = () => {
    this.setState(prevState => ({
      productTotalPrice:
        prevState.productPrice +
        prevState.extraCostColor +
        prevState.extraCostCapacity
    }));
  };

  handleClearInfoProduct = () => {
    this.setState({
      colorsArr: [],
      capacitiesArr: [],
      productPrice: 0,
      productTotalPrice: 0,
      productColor: "",
      productCapacity: "",
      extraCostColor: 0,
      extraCostCapacity: 0
    });
  };

  render() {
    const { id, name, oldPrice, price } = this.props.phone;

    const {
      productPrice,
      productTotalPrice,
      colorsArr,
      capacitiesArr,
      productColor,
      productCapacity,
      extraCostCapacity,
      extraCostColor,
      colorsId,
      capacitiesId,
      chooseCapacityId,
      chooseColorId
    } = this.state;

    const percentLess = Math.ceil(((price - oldPrice) / oldPrice) * 100);

    const colors = colorsArr.map((color, id) => {
      return (
        <p
          key={id}
          className="color-info__name"
          onClick={() => {
            this.handleChooseColor(color.id, color.name, color.priceModifier);
            this.handleTotalPrice();
          }}
        >
          {color.name}
        </p>
      );
    });

    const capacities = capacitiesArr.map((capacity, id) => {
      return (
        <p
          key={id}
          className="capacity-info__name"
          onClick={() => {
            this.handleChooseCapacity(
              capacity.id,
              capacity.name,
              capacity.priceModifier
            );
            this.handleTotalPrice();
          }}
        >
          {capacity.name}
        </p>
      );
    });

    return (
      <section className="section-products-info">
        {this.props.orderPosition.length !== 0 && (
          <NavLink to="/shopping-cart" className="icon-cart__link">
            <div className="icon-cart__box">
              <i className="fas fa-shopping-cart icon-cart__icon"></i>
            </div>
          </NavLink>
        )}

        <NavLink to="/mobile-phones" className="return__link">
          <button onClick={this.handleClearInfoProduct} className="return__btn">
            return
          </button>
        </NavLink>

        <h4 className="section-products-info__title">
          more info about {name}{" "}
        </h4>

        <section className="price-info">
          <h5 className="price-info__title">price</h5>
          <p className="price-info__text price-info__text--old-price">
            {oldPrice} $
          </p>
          <p className="price-info__text price-info__text--price">{price} $</p>
          <p className="price-info__text price-info__text--promotion">
            {percentLess} %
          </p>
        </section>

        <section className="color-info">
          <h5 className="color-info__title">color</h5>
          {colors}
        </section>

        <section className="capacity-info">
          <h5 className="capacity-info__title">capacity</h5>
          {capacities}
        </section>

        <h5 className="total-price-info">
          total price:
          <span className="total-price-info__price">
            {" "}
            {productTotalPrice ? productTotalPrice : productPrice} $
          </span>
        </h5>

        <div className="add-to-cart">
          <NavLink to="shopping-cart" className="add-to-cart__link">
            <button
              disabled={!productColor || !productCapacity}
              className="add-to-cart__btn"
              onClick={() => {
                this.props.handleAddProductToCart(
                  id,
                  name,
                  productColor,
                  productCapacity,
                  productPrice,
                  productTotalPrice,
                  extraCostColor,
                  extraCostCapacity
                );
                this.props.handleInfoIdForm(
                  id,
                  colorsId,
                  capacitiesId,
                  chooseColorId,
                  chooseCapacityId,
                  productTotalPrice
                );
              }}
            >
              add to cart
            </button>
          </NavLink>
        </div>
      </section>
    );
  }
}

export default ProductsInfo;
