import React from "react";
import { useThemeContext } from "../../../pages/Theme/ThemeContext";
import { useMyFavoriteTracksQuery } from "../../../redux/apiMusic";
import BlockFilter from "../../BlockFilter/BlockFilter";
import BlockSearch from "../../BlockSearch/BlockSearch";
import SkeletonTrack from "../../Skeletons/SkeletonTrack";
import * as S from "../PlayListStyle";
import Track from "../Tracks/Track";
const MyPlayList = () => {
  const { theme } = useThemeContext();
  const { data = [], isLoading, refetch } = useMyFavoriteTracksQuery();
  console.log(data)
  return (
    <S.MainCenterblock>
      <BlockSearch />

      <S.CenterblockHeading theme={theme}>Мой плейлист</S.CenterblockHeading>
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

        <S.ContentPlaylist theme={theme}>
          {isLoading ? (
            <SkeletonTrack />
          ) : (
            data.map((item) => {
              return (
                <Track refetch={refetch} key={item.id} item={item} {...item} data={data} />
              );
            })
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
};
export default MyPlayList;
