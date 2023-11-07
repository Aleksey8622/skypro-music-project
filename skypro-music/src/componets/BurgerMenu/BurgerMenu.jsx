import * as S from "./BurgerStyle";

function BurgerMenu({ user, cancelHandler }) {
  return (
    <S.BurgerMenuList>
      <S.MenuItem>
        <S.MenuLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Главное
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink to={"/favorites"}>Мой плейлист</S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink to={"/login"} onClick={user !== null && cancelHandler}>
          Выйти
        </S.MenuLink>
      </S.MenuItem>
    </S.BurgerMenuList>
  );
}
export default BurgerMenu;
