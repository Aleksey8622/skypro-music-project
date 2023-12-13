import BlockFilter from "../BlockFilter/BlockFilter";
import BlockSearch from "../BlockSearch/BlockSearch";
import React from "react";
import Track from "./Tracks/Track";
import { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonTrack from "../Skeletons/SkeletonTrack";
import * as S from "./PlayListStyle";
import { getTrack } from "../../api/api";
import { useThemeContext } from "../../pages/Theme/ThemeContext";

function PlayList() {
  const [errorTrack, setErrorTrack] = useState(null);

  const [allTracks, setTracks] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  // const [serchTrack, setSearchTrack] = useState(allTracks)
  // console.log(serchTrack);

  useEffect(() => {
    console.log(allTracks);
  }, [allTracks]);

  useEffect(() => {
    getTrack()
      .then((tracks) => {
        setTracks(tracks);
        setIsLoading(false);
      })

      .catch((error) => {
        setErrorTrack(error.message);
      });
  }, []);
  // const handelPlayer = () => setShowPlayer(!showPlayer);
  const { theme } = useThemeContext();

  return (
    <S.MainCenterblock>
      <BlockSearch />

      <S.CenterblockHeading theme={theme}>Треки</S.CenterblockHeading>
      {/* <h1 onClick={handelTrack}>Нажать</h1> */}

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
        {errorTrack ? (
          <p>Не удалось загрузить плейлист, попробуйте позже</p>
        ) : null}
        <S.ContentPlaylist theme={theme}>
          {isLoading ? (
            <SkeletonTrack />
          ) : (
            allTracks.map((item) => {
              return (
                <Track
                  isLoading={isLoading}
                  key={item.id}
                  // name={item.name}
                  // author={item.author}
                  // duration_in_seconds={item.duration_in_seconds
                  // }
                  // album={item.album}
                  {...item}
                  allTracks={allTracks}
                />
              );
            })
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}

export default PlayList;
