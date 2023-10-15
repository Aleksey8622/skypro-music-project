import "../App.css";
import React from "react";
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
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      {filter ? (
        <div
          onClick={showFilterAuthor}
          className="filter__button button-author _btn-text_active"
        >
          исполнителю
          <nav className="menu-filter">
            <ul className="menu-list">
              <li className="menu-item">Nero</li>
              <li className="menu-item">Dynoro, Outwork, Mr. Gee</li>
              <li className="menu-item">Ali Bakgor</li>
              <li className="menu-item">Стоункат, Psychopath</li>
              <li className="menu-item">Jaded, Will Clarke, AR/CO</li>
              <li className="menu-item">Blue Foundation, Zeds Dead</li>
              <li className="menu-item">
                HYBIT, Mr. Black, Offer Nissim, Hi Profile
              </li>
              <li className="menu-item">minthaze</li>
              <li className="menu-item">Calvin Harris, Disciples</li>
              <li className="menu-item">Tom Boxer</li>
            </ul>
          </nav>
        </div>
      ) : (
        <div
          onClick={showFilterAuthor}
          className="filter__button button-author _btn-text"
        >
          исполнителю
        </div>
      )}

      {filterYears ? (
        <div
          onClick={showFilterYears}
          className="filter__button button-year _btn-text_active"
        >
          году выпуска
          <nav className="menu-filter">
            <ul className="menu-list">
              <li className="menu-item">2013</li>
              <li className="menu-item">2014</li>
              <li className="menu-item">2015</li>
              <li className="menu-item">2016</li>
              <li className="menu-item">2017</li>
              <li className="menu-item">2018</li>
              <li className="menu-item">2019</li>
              <li className="menu-item">2020</li>
              <li className="menu-item">2020</li>
              <li className="menu-item">2021</li>
            </ul>
          </nav>
        </div>
      ) : (
        <div
          onClick={showFilterYears}
          className="filter__button button-year _btn-text"
        >
          году выпуска
        </div>
      )}
      {filterGenre ? (
        <div
          onClick={showFilterGenre}
          className="filter__button button-genre _btn-text_active"
        >
          жанру
          <nav className="menu-filter menu-filter_active">
            <ul className="menu-list">
              <li className="menu-item">Folk music</li>
              <li className="menu-item">Country</li>
              <li className="menu-item">Latin American music</li>
              <li className="menu-item">Blues</li>
              <li className="menu-item"> Rhythm and blues</li>
              <li className="menu-item">Jazz</li>
              <li className="menu-item">Chanson, romance, author's song</li>
              <li className="menu-item">Electronic music</li>
              <li className="menu-item">Hip-Hop</li>
              <li className="menu-item">Reggae</li>
            </ul>
          </nav>
        </div>
      ) : (
        <div
          onClick={showFilterGenre}
          className="filter__button button-genre _btn-text"
        >
          жанру
        </div>
      )}
    </div>
  );
}
export default BlockFilter;
