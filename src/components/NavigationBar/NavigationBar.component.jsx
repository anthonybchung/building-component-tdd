import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuButton from "../MenuButton/MenuButton.component";

import "./NavigationBar.styles.css";

const NavigationBar = ({ brand, navItems }) => {
  const menuList = navItems.map((item, index) => {
    return (
      <li key={index}>
        <NavLink to={item.path}>{item.text}</NavLink>
      </li>
    );
  });

  const menuButtonHandler = () => {
    setIsClose((prev) => !prev);
    console.log("hello");
  };

  const [isClose, setIsClose] = useState(true);
  return (
    <header>
      <nav>
        <button>
          <NavLink to={brand.path}>{brand.text}</NavLink>
        </button>
        <ul>{menuList}</ul>
        <button className="menu-button">menu</button>
        <MenuButton menuButtonHandler={menuButtonHandler} isClose={isClose} />
      </nav>
    </header>
  );
};

export default NavigationBar;
