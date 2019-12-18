import React from "react";
import { NavLink } from "react-router-dom";

const Product = props => {
  const { name, oldPrice, price, id } = props.phone;

  const percentLess = Math.ceil(((price - oldPrice) / oldPrice) * 100);

  return (
    <article className="product">
      <h5 className="product__title">{name}</h5>
      <p className="product__text product__text--old-price">{oldPrice} $</p>
      <p className="product__text product__text--price">{price} $</p>
      <p className="product__text product__text--promotion">{percentLess} %</p>
      <NavLink to={`/phone-${id}`} className="product__info-link">
        <button
          className="product__info-btn"
          onClick={() => props.handleOpenMoreInfo(id)}
        >
          more info
        </button>
      </NavLink>
    </article>
  );
};

export default Product;
