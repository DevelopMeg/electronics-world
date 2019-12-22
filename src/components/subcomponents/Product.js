import React from "react";
import { NavLink } from "react-router-dom";

const Product = props => {
  const { name, oldPrice, price, id, image } = props.phone;

  const percentLess = Math.ceil(((price - oldPrice) / oldPrice) * 100);

  return (
    <article className="product">
      <div
        className="product__box-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <h5 className="product__title">{name}</h5>

      <div className="product__box-text">
        <p className="product__text product__text--old-price">{oldPrice} $</p>
        <p className="product__text product__text--price">{price} $</p>
        <p className="product__text product__text--promotion">
          {percentLess} %
        </p>
      </div>

      <NavLink to={`/phone-${id}`} className="link">
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
