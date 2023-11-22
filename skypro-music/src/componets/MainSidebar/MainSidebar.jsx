import React from "react";
// import { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";

// import SkeletonSidebar from "../Skeletons/SkeletonSidebar";
import * as S from "./MainSidebarStyle";
function MainSidebar({ user, cancelHandler }) {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // }, []);
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon onClick={user !== null && cancelHandler}>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>

      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <S.SidebarLink to={"/category/1"}>
              <S.SidebarImg src="img/Frame5.png" alt="day's playlist" />
            </S.SidebarLink>
          </S.SidebarItem>

          <S.SidebarItem>
            <S.SidebarLink to={"/category/2"}>
              <S.SidebarImg src="/img/Frame3.png" alt="day's playlist" />
            </S.SidebarLink>
          </S.SidebarItem>

          <S.SidebarItem>
            <S.SidebarLink to={"/category/3"}>
              <S.SidebarImg src="img/Frame4.png" alt="day's playlist" />
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}

export default MainSidebar;
