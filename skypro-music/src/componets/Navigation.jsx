import "../App.css";
import BurgerMenu from "./BurgerMenu";
import React from "react";
const { useState } = React;
function Navigation() {
  const [show, setShow] = useState(true);

  const showMenu = () => setShow(!show);
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/icon/logo.svg" alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={showMenu}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {show && (
        <div className="nav__menu menu">
          <BurgerMenu />
        </div>
      )}
    </nav>
  );
}
export default Navigation;
