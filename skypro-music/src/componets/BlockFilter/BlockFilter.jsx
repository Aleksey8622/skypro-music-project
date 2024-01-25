import React, { useEffect } from "react";
import * as S from "./BlockFilterStyle";
import { useState } from "react";
import { useThemeContext } from "../../pages/Theme/ThemeContext";
import { useAllTracksQuery } from "../../redux/apiMusic";
import { useDispatch, useSelector } from "react-redux";
import {
  getCleanTheFilter,
  selectedFiltered,
  setFilters,
} from "../../store/slice";

function BlockFilter() {
  const { data = [] } = useAllTracksQuery();
  const { theme } = useThemeContext();
  const [genre, setGenre] = useState([]);
  const [dataTrack, setDataTrack] = useState([]);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (data.length > 0) {
      const ganreSet = new Set();
      data.forEach((element) => {
        ganreSet.add(element.genre);
      });
      console.log(ganreSet);
      setGenre(Array.from(ganreSet));
    }
    if (data.length > 0) {
      const dataSet = new Set();
      data.forEach((element) => {
        dataSet.add(element.release_date);
      });
      // console.log(ganreSet);
      setDataTrack(Array.from(dataSet));
    }
  }, [data]);
  const filtredDataRedux = useSelector((state) => state.music.filteredTracks);
  const isFiltred = useSelector((state) => state.music.isFiltred);
  const filteredAuthorGenreYears = useSelector(
    (state) => state.music.filteredAuthorGenreYears
  );
  const handleFilter = ({ nameFilter, valueFilter }) => {
    // dispatch(setFilters({ nameFilter, valueFilter }));
    if (!filteredAuthorGenreYears.includes(valueFilter)) {
      dispatch(selectedFiltered({ nameFilter, valueFilter }));
    }
    console.log(filteredAuthorGenreYears);
   
    // //диспатч в который прокидываем на акшен сет фильтерс({filter, value})
  };

  return (
    <S.CenterBlockFilter theme={theme}>
      {/* <div onClick={() => removeHandleFilter()}>clean</div> */}
      <S.FilterTitle theme={theme}>Искать по:</S.FilterTitle>
      {filter ? (
        <S.BtnActive theme={theme} onClick={showFilterAuthor}>
          исполнителю
          <S.MenuFilter theme={theme}>
            <S.MenuList theme={theme}>
              {data.map((item) => {
                return (
                  <S.MenuItem
                    key={item.id}
                    theme={theme}
                    onClick={() => {
                      handleFilter({
                        nameFilter: "author",
                        valueFilter: item.author,
                      });
                    }}
                  >
                    {item.author}
                  </S.MenuItem>
                );
              })}
            </S.MenuList>
          </S.MenuFilter>
        </S.BtnActive>
      ) : (
        <S.FilterButton theme={theme} onClick={showFilterAuthor}>
          исполнителю
        </S.FilterButton>
      )}

      {filterYears ? (
        <S.BtnActive theme={theme} onClick={showFilterYears}>
          году выпуска
          <S.MenuFilter theme={theme}>
            <S.MenuList theme={theme}>
              {dataTrack.map((item) => {
                return (
                  <S.MenuItem theme={theme} key={item}>
                    {item}
                  </S.MenuItem>
                );
              })}
            </S.MenuList>
          </S.MenuFilter>
        </S.BtnActive>
      ) : (
        <S.FilterButton theme={theme} onClick={showFilterYears}>
          году выпуска
        </S.FilterButton>
      )}
      {filterGenre ? (
        <S.BtnActive theme={theme} onClick={showFilterGenre}>
          жанру
          <S.MenuFilterActive theme={theme}>
            <S.MenuList theme={theme}>
              {genre.map((item) => {
                return (
                  <S.MenuItem key={item} theme={theme}>
                    {item}
                  </S.MenuItem>
                );
              })}
            </S.MenuList>
          </S.MenuFilterActive>
        </S.BtnActive>
      ) : (
        <S.FilterButton theme={theme} onClick={showFilterGenre}>
          жанру
        </S.FilterButton>
      )}
    </S.CenterBlockFilter>
  );
}
export default BlockFilter;
