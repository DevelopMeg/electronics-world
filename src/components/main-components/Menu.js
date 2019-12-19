import React from "react";
import MenuPage from "../subcomponents/MenuPage";

const Menu = () => {
  const pagesList = [
    { name: "phone", path: "/mobile-phones", icon: "fas fa-mobile" },
    { name: "tv", path: "/TVs", icon: "fas fa-tv" },
    { name: "camera", path: "/cameras", icon: "fas fa-camera" },
    { name: "computer", path: "/computers", icon: "fas fa-laptop" },
    { name: "accessory", path: "/accessories", icon: "fas fa-headphones" }
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
