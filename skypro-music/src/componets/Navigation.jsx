import "../App.css";
import BurgerMenu from "./BurgerMenu";
function Navigation() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/icon/logo.svg" alt="logo" />
      </div>
      <div className="nav__burger burger">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <div className="nav__menu menu">
        <BurgerMenu />
      </div>
    </nav>
  );
}
export default Navigation;
