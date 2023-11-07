import BlockFilter from "../BlockFilter/BlockFilter";
import BlockSearch from "../BlockSearch/BlockSearch";
import React from "react";
import Track from "./Tracks/Track";
// import { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
// import SkeletonTrack from "../Skeletons/SkeletonTrack";
import * as S from "./PlayListStyle";

function PlayList() {
  const tracks = [
    {
      id: 1,
      name: "Guilt",
      singer: "Nero",
      album: "Welcome Reality",
      time: "4:45",
      isLike: false,
    },
    {
      id: 2,
      name: "Elektro",
      singer: "Dynoro, Outwork, Mr. Gee",
      album: "Elektro",
      time: "2:22",
      isLike: false,
    },
    {
      id: 3,
      name: "I’m Fire",
      singer: "Ali Bakgor",
      album: "I’m Fire",
      time: "2:22",
      isLike: false,
    },
    {
      id: 4,
      name: "Non Stop",
      singer: "Стоункат, Psychopath",
      album: "Non Stop",
      time: "4:12",
      isLike: false,
    },
    {
      id: 5,
      name: "Run Run",
      singer: "Jaded, Will Clarke, AR/CO",
      album: "Run Run",
      time: "2:54",
      isLike: false,
    },
    {
      id: 6,
      name: "Eyes on Fire",
      singer: "Blue Foundation, Zeds Dead",
      album: "Eyes on Fire",
      time: "5:20",
      isLike: false,
    },
    {
      id: 7,
      name: "Mucho Bien",
      singer: "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
      album: "Mucho Bien",
      time: "3:41",
      isLike: false,
    },
    {
      id: 8,
      name: "Knives n Cherries",
      singer: "minthaze",
      album: "Captivating",
      time: "1:48",
      isLike: false,
    },
    {
      id: 9,
      name: "How Deep Is Your Love",
      singer: "Calvin Harris, Disciples",
      album: "How Deep Is Your Love",
      time: "3:32",
      isLike: false,
    },
    {
      id: 10,
      name: "Morena",
      singer: "Tom Boxer",
      album: "Soundz Made in Romania",
      time: "4:45",
      isLike: false,
    },
    {
      id: 11,
      name: "Knives n Cherries",
      singer: "minthaze",
      album: "Captivating",
      time: "1:48",
      isLike: false,
    },
  ];

  return (
    <S.MainCenterblock>
      <BlockSearch />
      <S.CenterblockHeading>Треки</S.CenterblockHeading>
      <BlockFilter />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.TitleCol1>Трек</S.TitleCol1>
          <S.TitleCol2>ИСПОЛНИТЕЛЬ</S.TitleCol2>
          <S.TitleCol3>АЛЬБОМ</S.TitleCol3>
          <S.TitleCol4>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.TitleCol4>
        </S.ContentTitle>
        <S.ContentPlaylist>
          {tracks.map((item) => {
            return (
              <Track
                key={item.id}
                name={item.name}
                singer={item.singer}
                album={item.album}
                time={item.time}
              />
            );
          })}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}

export default PlayList;
