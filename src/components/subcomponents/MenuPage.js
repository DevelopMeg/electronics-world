import React from "react";
import { NavLink } from "react-router-dom";

const MenuPage = props => {
  const { name, path } = props.page;

  return (
    <NavLink to={path} className="menu__link">
      <li className="menu__item">{name}</li>
    </NavLink>
  );
};

export default MenuPage;
