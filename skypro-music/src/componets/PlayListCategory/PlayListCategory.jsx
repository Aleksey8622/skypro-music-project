import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useThemeContext } from "../../pages/Theme/ThemeContext";
import {
  useGetSelectionCategoryQuery,
  useMyFavoriteTracksQuery,
} from "../../redux/apiMusic";
import { AuthContext } from "../../store/AuthContext";
import {
  // clearTheFilter,
  // setFilters,
  setTrackListCollectionsFilter,
} from "../../store/slice";
import BlockFilter from "../BlockFilter/BlockFilter";
import BlockSearch from "../BlockSearch/BlockSearch";
import * as S from "../PlayList/PlayListStyle";
import Track from "../PlayList/Tracks/Track";
const PlayListCategory = () => {
  const { theme } = useThemeContext();
  const params = useParams();
  console.log(params);
  const token = localStorage.getItem("access");
  const { logout } = useContext(AuthContext);
  const dispatch = useDispatch();
  const initialCollections = useSelector(
    (state) => state.music.filterdCollectionsForFilter
  );
  // const filterCollectionRedux = useSelector(
  //   (state) => state.music.filterdCollectionsTracks
  // );
  // const isFiltred = useSelector((state) => state.music.isFiltred);
  const valueSearch = useSelector((state) => state.music.filters.search);

  // let collectionsData = isFiltred && initialCollections;
  const { error: likeError, error: dislikeError } = useMyFavoriteTracksQuery({
    token,
  });
  const { data = [] } = useGetSelectionCategoryQuery({ id: params.id });
  const dataItem = data.items;

  useEffect(() => {
    if (
      (likeError && likeError.status === 401) ||
      (dislikeError && dislikeError.status === 401)
    ) {
      logout();
    }

    dispatch(setTrackListCollectionsFilter(dataItem));
    
    // console.log(dataItem);
    console.log(data);
  });

  const ArrCategorys = [
    {
      id: 1,
      title: "Плейлист дня",
    },
    {
      id: 2,
      title: "100 хитов",
    },
    {
      id: 3,
      title: "Инди-заряд",
    },
  ];
  const category = ArrCategorys.find(
    (categor) => categor.id === Number(params.id)
  );
  // if (category) {
  //   const newArr = [...initialCollections].splice(0, initialCollections.length);
  //   return newArr;
  // }

  return (
    <S.MainCenterblock>
      <BlockSearch />

      <S.CenterblockHeading theme={theme}>
        {category.title}
      </S.CenterblockHeading>
      {/* <h1 onClick={handelTrack}>Нажать</h1> */}

      {<PlayListCategory /> ? null : <BlockFilter />}

      <S.CenterblockContent>
        <S.ContentTitle>
          <S.TitleCol1>Трек</S.TitleCol1>
          <S.TitleCol2>ИСПОЛНИТЕЛЬ</S.TitleCol2>
          <S.TitleCol3>АЛЬБОМ</S.TitleCol3>
          <S.TitleCol4>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.TitleCol4>
        </S.ContentTitle>
        {/* {Error ? (
          <p>Не удалось загрузить плейлист, попробуйте позже</p>
        ) : null} */}
        <S.ContentPlaylist theme={theme}>
          {initialCollections?.map((item) => {
            return (
              <Track
                key={item.id}
                item={item}
                {...item}
                data={dataItem}
                isCategoryLike={false}
              />
            );
          })}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
};

export default PlayListCategory;
