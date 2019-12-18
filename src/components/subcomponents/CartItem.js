import React from "react";

const CartItem = props => {
  const {
    id,
    name,
    color,
    capacity,
    price,
    totalPrice,
    extraCostColor,
    extraCostCapacity
  } = props.order;

  return (
    <div className="product-cart">
      <p className="product-cart__name">{name}</p>
      <p className="product-cart__price">{price} $</p>

      <div className="product-cart__parameters">
        <p className="product-cart__color">
          {color} - {extraCostColor} $
        </p>
        <p className="product-cart__capacity">
          {capacity} - {extraCostCapacity} $
        </p>
      </div>

      <p className="product-cart__total-price">{totalPrice} $</p>
    </div>
  );
};

export default CartItem;
