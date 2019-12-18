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
      <NavLink to="/mobile-phones" className="return__link">
        <button className="return__btn">return</button>
      </NavLink>

      <section className="shopping-cart">
        <h4 className="shopping-cart__title">your shopping cart</h4>
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
        <ol className="shopping-cart__list">{orders}</ol>
      </section>

      <p className="shopping-cart__value-purchases">
        value of purchases: {props.totalPriceCart} $
      </p>
      <NavLink to="/shopping-form" className="shopping-cart__buy-link">
        <button className="shopping-cart__buy-btn">buy</button>
      </NavLink>
    </section>
  );
};

export default ShoppingCart;
