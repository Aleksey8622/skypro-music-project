import BlockFilter from "../BlockFilter/BlockFilter";
import BlockSearch from "../BlockSearch/BlockSearch";

import Track from "./Tracks/Track";

import "react-loading-skeleton/dist/skeleton.css";
import SkeletonTrack from "../Skeletons/SkeletonTrack";
import * as S from "./PlayListStyle";
// import { getTrack } from "../../api/api";
import { useThemeContext } from "../../pages/Theme/ThemeContext";
import { useAllTracksQuery } from "../../redux/apiMusic";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function PlayList({ setSearch, search }) {
  const { theme } = useThemeContext();
  const { data = [], isLoading } = useAllTracksQuery();
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch()
  },[data])

  const filteredData = data.filter((track) => {
    return (
      track.name.toLowerCase().includes(search.toLowerCase()) ||
      track.author.toLowerCase().includes(search.toLowerCase())
    );
  });

  const newData = search ? filteredData : data;

  // const [errorTrack, setErrorTrack] = useState(null);

  // const [allTracks, setTracks] = useState(data);

  // console.log(allTracks);

  // const [isLoading, setIsLoading] = useState(true);
  // const [serchTrack, setSearchTrack] = useState(allTracks)
  // console.log(serchTrack);
  // const runSearch = (search) => {
  //   // if (!search) {
  //   //   return data;
  //   // }
  //   const lowerCaseQuery = search.toLowerCase();

  //   data.filter((track) => {
  //     return (
  //       track.name.toLowerCase().includes(lowerCaseQuery) ||
  //       track.author.toLowerCase().includes(lowerCaseQuery)
  //     );
  //   });
  // };
  // useEffect(() => {
  //   console.log(newData);
  // }, [newData]);

  // useEffect(() => {
  //   getTrack()
  //     .then((tracks) => {
  //       setTracks(tracks);
  //       setIsLoading(false);
  //     })

  //     .catch((error) => {
  //       setErrorTrack(error.message);
  //     });
  // }, []);
  // const handelPlayer = () => setShowPlayer(!showPlayer);

  return (
    <S.MainCenterblock>
      <BlockSearch setSearch={setSearch} />

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
        {/* {Error ? (
          <p>Не удалось загрузить плейлист, попробуйте позже</p>
        ) : null} */}
        <S.ContentPlaylist theme={theme}>
          {isLoading ? (
            <SkeletonTrack />
          ) : (
            newData.map((item) => {
              return (
                <Track
                  // refetch={refetch}
                  key={item.id}
                  item={item}
                  {...item}
                  data={data}
                  isFavoriteLike={false}
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
