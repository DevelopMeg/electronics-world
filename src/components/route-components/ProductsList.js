import React from "react";
import Product from "../subcomponents/Product";
import { NavLink } from "react-router-dom";

const ProductsList = props => {
  const phones = props.dataPhone.map((phone, id) => {
    return (
      <Product
        key={id}
        phone={phone}
        handleOpenMoreInfo={props.handleOpenMoreInfo}
      />
    );
  });

  return (
    <section className="section-products-list">
      {props.orderPosition.length !== 0 && (
        <NavLink to="/shopping-cart" className="icon-cart__link">
          <div className="icon-cart__box">
            <i className="fas fa-shopping-cart icon-cart__icon"></i>
          </div>
        </NavLink>
      )}

      <h4 className="section-products-list__title">mobile phone list</h4>
      {phones}
    </section>
  );
};

export default ProductsList;
