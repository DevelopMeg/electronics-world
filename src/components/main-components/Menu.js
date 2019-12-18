import React from "react";
import MenuPage from "../subcomponents/MenuPage";

const Menu = () => {
  const pagesList = [
    { name: "mobile phones", path: "/mobile-phones" },
    { name: "tv", path: "/TVs" },
    { name: "computers", path: "/computers" },
    { name: "cameras", path: "/cameras" },
    { name: "accessories", path: "/accessories" }
  ];

  const menu = pagesList.map((page, id) => {
    return <MenuPage key={id} page={page} />;
  });

  return (
    <nav className="menu">
      <ul className="menu__item-list">{menu}</ul>
    </nav>
  );
};

export default Menu;
