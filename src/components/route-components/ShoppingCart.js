import React from "react";
import CartItem from "../subcomponents/CartItem";
import { NavLink } from "react-router-dom";

const ShoppingCart = props => {
  const orders = props.orderPosition.map((order, id) => {
    return (
      <li key={id} className="shopping-cart__item">
        <CartItem order={order} />
      </li>
    );
  });

  return (
    <section className="section-shopping-cart">
      <NavLink to="/mobile-phones" className="link">
        <button className="return__btn return-btn--cart">return</button>
      </NavLink>

      <section className="shopping-cart">
        <h4 className="shopping-cart__title">your shopping cart</h4>
        <div className="shopping-cart__box-subtitle">
          <p className="shopping-cart__subtitle shopping-cart__subtitle--product">
            product
          </p>
          <p className="shopping-cart__subtitle shopping-cart__subtitle--price">
            price
          </p>
          <p className="shopping-cart__subtitle shopping-cart__subtitle--parameters">
            parameters
          </p>
          <p className="shopping-cart__subtitle shopping-cart__subtitle--totality">
            totality
          </p>
        </div>
        <ol className="shopping-cart__list">{orders}</ol>
      </section>

      <p className="shopping-cart__value-purchases">
        value of purchases:{" "}
        <span className="shopping-cart__value-purchases--price">
          {props.totalPriceCart} ${" "}
        </span>
      </p>
      <NavLink to="/shopping-form" className="link">
        <button className="shopping-cart__buy-btn">
          <span className="shopping-cart__buy-btn-text">buy</span>
        </button>
      </NavLink>
    </section>
  );
};

export default ShoppingCart;
