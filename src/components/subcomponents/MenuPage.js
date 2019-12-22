import React from "react";
import { NavLink } from "react-router-dom";

const MenuPage = props => {
  const { name, path, icon } = props.page;

  return (
    <NavLink to={path} className="menu__link">
      <li className="menu__item">
        <p className="menu__name">{name}</p>
        <i className={`${icon} menu__icon`}></i>
      </li>
    </NavLink>
  );
};

export default MenuPage;
