import React from "react";
import introImg from "../../images/svg/undraw_fitting_piece_iilo.svg";
import "./Header.css";

const Header = () => {
  return (
      <div className="header">
    <header>
      <div className="header-content">
        <h1>Make a developer team</h1>
        <h2>budget 1M$</h2>
      </div>
      <div className="header-img">
        <img src={introImg} alt="" />
      </div>
    </header>
      </div>
  );
};

export default Header;
