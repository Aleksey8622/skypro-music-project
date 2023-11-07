import React from "react";
import * as S from "./BlockFilterStyle";
const { useState } = React;

function BlockFilter() {
  const [filter, setShowFilter] = useState(false);

  const [filterYears, setYearsFilter] = useState(false);

  const [filterGenre, setGenreFilter] = useState(false);

  const showFilterAuthor = () => {
    setShowFilter(!filter);
    setYearsFilter(false);
    setGenreFilter(false);
  };

  const showFilterYears = () => {
    setYearsFilter(!filterYears);
    setShowFilter(false);
    setGenreFilter(false);
  };

  const showFilterGenre = () => {
    setGenreFilter(!filterGenre);
    setShowFilter(false);
    setYearsFilter(false);
  };
  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      {filter ? (
        <S.BtnActive onClick={showFilterAuthor}>
          исполнителю
          <S.MenuFilter>
            <S.MenuList>
              <S.MenuItem>Nero</S.MenuItem>
              <S.MenuItem>Dynoro, Outwork, Mr. Gee</S.MenuItem>
              <S.MenuItem>Ali Bakgor</S.MenuItem>
              <S.MenuItem>Стоункат, Psychopath</S.MenuItem>
              <S.MenuItem>Jaded, Will Clarke, AR/CO</S.MenuItem>
              <S.MenuItem>Blue Foundation, Zeds Dead</S.MenuItem>
              <S.MenuItem>
                HYBIT, Mr. Black, Offer Nissim, Hi Profile
              </S.MenuItem>
              <S.MenuItem>minthaze</S.MenuItem>
              <S.MenuItem>Calvin Harris, Disciples</S.MenuItem>
              <S.MenuItem>Tom Boxer</S.MenuItem>
            </S.MenuList>
          </S.MenuFilter>
        </S.BtnActive>
      ) : (
        <S.FilterButton onClick={showFilterAuthor}>исполнителю</S.FilterButton>
      )}

      {filterYears ? (
        <S.BtnActive onClick={showFilterYears}>
          году выпуска
          <S.MenuFilter>
            <S.MenuList>
              <S.MenuItem>2013</S.MenuItem>
              <S.MenuItem>2014</S.MenuItem>
              <S.MenuItem>2015</S.MenuItem>
              <S.MenuItem>2016</S.MenuItem>
              <S.MenuItem>2017</S.MenuItem>
              <S.MenuItem>2018</S.MenuItem>
              <S.MenuItem>2019</S.MenuItem>
              <S.MenuItem>2020</S.MenuItem>
              <S.MenuItem>2020</S.MenuItem>
              <S.MenuItem>2021</S.MenuItem>
            </S.MenuList>
          </S.MenuFilter>
        </S.BtnActive>
      ) : (
        <S.FilterButton onClick={showFilterYears}>году выпуска</S.FilterButton>
      )}
      {filterGenre ? (
        <S.BtnActive onClick={showFilterGenre}>
          жанру
          <S.MenuFilterActive>
            <S.MenuList>
              <S.MenuItem>Folk music</S.MenuItem>
              <S.MenuItem>Country</S.MenuItem>
              <S.MenuItem>Latin American music</S.MenuItem>
              <S.MenuItem>Blues</S.MenuItem>
              <S.MenuItem> Rhythm and blues</S.MenuItem>
              <S.MenuItem>Jazz</S.MenuItem>
              <S.MenuItem>Chanson, romance, author's song</S.MenuItem>
              <S.MenuItem>Electronic music</S.MenuItem>
              <S.MenuItem>Hip-Hop</S.MenuItem>
              <S.MenuItem>Reggae</S.MenuItem>
            </S.MenuList>
          </S.MenuFilterActive>
        </S.BtnActive>
      ) : (
        <S.FilterButton onClick={showFilterGenre}>жанру</S.FilterButton>
      )}
    </S.CenterBlockFilter>
  );
}
export default BlockFilter;
