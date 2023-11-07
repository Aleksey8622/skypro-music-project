import * as S from "./BlockSearchStyle";
// const S.CenterBlockSearch = S..div
function BlockSearch() {
  return (
    <S.CenterBlockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText type="search" placeholder="Поиск" name="search" />
    </S.CenterBlockSearch>
  );
}
export default BlockSearch;
