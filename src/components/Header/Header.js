import React from "react";
import logo from "./Logo.png";

function Header() {
  return (
    <header className="header">
      <img className="header_logo" src={logo} alt="logo" />
    </header>
  );
}
export default Header;
