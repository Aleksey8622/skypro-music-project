import * as S from "./BlockSearchStyle";

// const S.CenterBlockSearch = S..div

function BlockSearch() {

  // const handelSearch= (event) =>{
  //   console.log(event.target.value);
  //   const foundTracks = runSearch(event.target.value)
  //   setTracks(foundTracks)
  // }
  return (
    <S.CenterBlockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
        // onChange={handelSearch}
      />
    </S.CenterBlockSearch>
  );
}
export default BlockSearch;
