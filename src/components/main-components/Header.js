import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="head">
      <NavLink to="/">
        <h1 className="head__title">electronics world</h1>
      </NavLink>
    </header>
  );
};

export default Header;
