import BurgerMenu from "../BurgerMenu/BurgerMenu";
import React from "react";
import * as S from "./NavigationStyle";

const { useState } = React;

function Navigation({user, cancelHandler}) {
  const [show, setShow] = useState(false);

  const showMenu = () => setShow(!show);
  return (
    <S.Nav>
      <S.Logo>
        <S.LogoImg src="img/icon/logo.svg" alt="logo" />
      </S.Logo>
      <S.NavBurger onClick={showMenu}>
        <S.NavBurgerLine></S.NavBurgerLine>
        <S.NavBurgerLine></S.NavBurgerLine>
        <S.NavBurgerLine></S.NavBurgerLine>
      </S.NavBurger>
      {show && (
        <S.NavMenu>
          <BurgerMenu user={user} cancelHandler={cancelHandler} />
        </S.NavMenu>
      )}
    </S.Nav>
  );
}
export default Navigation;
