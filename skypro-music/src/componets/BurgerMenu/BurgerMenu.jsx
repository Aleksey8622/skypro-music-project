import * as S from "./BurgerStyle";

function BurgerMenu() {
  return (
    <S.BurgerMenuList>
      <S.MenuItem>
        <S.MenuLink href="/#">Главное</S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink href="/#">Мой плейлист</S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink href="../signin.html">Войти</S.MenuLink>
      </S.MenuItem>
    </S.BurgerMenuList>
  );
}
export default BurgerMenu;
