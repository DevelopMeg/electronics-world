import React from "react";
import Product from "../subcomponents/Product";

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
      <h4 className="section-products-list__title">mobile phone list</h4>
      {phones}
    </section>
  );
};

export default ProductsList;
