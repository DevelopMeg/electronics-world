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
    const { id, name, oldPrice, price, image } = this.props.phone;

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
        <div
          key={id}
          className={
            productColor === color.name
              ? "color-info__box-name color-info__box-name--selected"
              : "color-info__box-name"
          }
          cost={`+${color.priceModifier}$`}
          onClick={e => {
            this.handleChooseColor(color.id, color.name, color.priceModifier);
            this.handleTotalPrice();
          }}
        >
          <p className="color-info__name">{color.name}</p>
        </div>
      );
    });

    const capacities = capacitiesArr.map((capacity, id) => {
      return (
        <div
          key={id}
          className={
            productCapacity === capacity.name
              ? "capacity-info__box-name capacity-info__box-name--selected"
              : "capacity-info__box-name"
          }
          cost={`+${capacity.priceModifier}$`}
          onClick={() => {
            this.handleChooseCapacity(
              capacity.id,
              capacity.name,
              capacity.priceModifier
            );
            this.handleTotalPrice();
          }}
        >
          <p className="capacity-info__name">{capacity.name}</p>
        </div>
      );
    });

    return (
      <section className="section-products-info">
        {this.props.orderPosition.length !== 0 && (
          <NavLink to="/shopping-cart" className="link">
            <div className="icon-cart__box">
              <i className="fas fa-shopping-cart icon-cart__icon"></i>
            </div>
          </NavLink>
        )}

        <NavLink to="/mobile-phones" className="link link--info-return">
          <button
            onClick={this.handleClearInfoProduct}
            className="return__btn return__btn--info"
          >
            return
          </button>
        </NavLink>

        <h4 className="section-products-info__title">
          more info about {name}{" "}
        </h4>

        <div
          className="section-products-info__box-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="section-products-info__box-parameters">
          <section className="price-info">
            <h5 className="price-info__title">price</h5>
            <p className="price-info__text price-info__text--old-price">
              {oldPrice} $
            </p>
            <p className="price-info__text price-info__text--price">
              {price} $
            </p>
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

          <NavLink to="shopping-cart" className="link link--add-cart">
            <button
              disabled={!productColor || !productCapacity}
              className="add-cart-btn"
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
