import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <a href="/" className="logo">
        News App
      </a>
      <div className="header-right">
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </div>
    </div>
  );
};

export default Header;
