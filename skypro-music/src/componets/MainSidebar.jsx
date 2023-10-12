import "../App.css";
function MainSidebar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="/#">
              <img
                className="sidebar__img"
                src="img/Frame5.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="/#">
              <img
                className="sidebar__img"
                src="/img/Frame3.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="/#">
              <img
                className="sidebar__img"
                src="img/Frame4.png"
                alt="day's playlist"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSidebar;
