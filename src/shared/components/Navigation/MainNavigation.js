import React from "react";

import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <Link to="/">
        <h1 className="main-navigation__title">YourPlaces</h1>
      </Link>
      <nav>...</nav>
    </MainHeader>
  );
};

export default MainNavigation;
