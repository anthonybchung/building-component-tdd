import React from "react";
import Hamburger from "./hamburger.svg";
import CloseRounded from "./closerounded.svg";

const MenuButton = ({ isClose, menuButtonHandler }) => {
  const buttonImage = isClose ? (
    <img src={Hamburger} alt="hamburger icon" />
  ) : (
    <img src={CloseRounded} alt="close icon" />
  );

  return <button onClick={menuButtonHandler}>{buttonImage}</button>;
};

export default MenuButton;
