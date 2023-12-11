import { useEffect, useRef, useState } from "react";
import React from "react";
// import SkeletonPlayer from "../Skeletons/SkeletonPlayer";
import moment from "moment";
import * as S from "./PlayerStyle";
import { useThemeContext } from "../../pages/Theme/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { getPauseTrack, getPlayTrack } from "../../store/slice";
// const S.Bar = S..div``

function Player() {
  const currentTrack = useSelector((state) => state.app.currentTrack);
  const isPlaying = useSelector((state) => state.app.isPlaying);
  const dispatch = useDispatch();
  const { theme } = useThemeContext();

  // const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoop, setIsLoop] = useState(false);
  const [volume, setVolume] = useState(1);
  const formatedDuration = moment.utc(duration * 1000).format("mm:ss");
  const formatedCurrentTime = moment.utc(currentTime * 1000).format("mm:ss");

  const onChange = (event) => {
    const newCurrentTime = event.target.value;
    audioRef.current.currentTime = newCurrentTime;
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.5;
    setVolume(audio.volume);
    const updateTime = () => {
      if (audio.currentTime && audio.duration) {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
      } else {
        setDuration(0);
        setCurrentTime(0);
      }
    };
    audio.addEventListener("timeupdate", updateTime);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);
  const updateVolume = (event) => {
    const newVolume = event.target.value;
    console.log(newVolume);
    audioRef.current.volume = newVolume;
    console.log(audioRef.current.volume);
    setVolume(newVolume);
  };

  const audioRef = useRef(null);

  const startHandel = () => {
    audioRef.current.play();
    console.log(audioRef.current.play());
    dispatch(getPlayTrack());
    // setIsPlaying(true);
  };
  const stopHandel = () => {
    audioRef.current.pause();
    dispatch(getPauseTrack());
    // setIsPlaying(false);
  };

  const handelLoop = () => {
    audioRef.current.loop = true;
    setIsLoop(true);
    console.log("loop");
  };
  const handeStopLoop = () => {
    audioRef.current.loop = false;
    setIsLoop(false);
  };

  const toggleLoop = isLoop ? handeStopLoop : handelLoop;

  const togglePlay = isPlaying ? stopHandel : startHandel;

  useEffect(() => {
    if (currentTrack) {
      startHandel();
    } else {
      stopHandel();
    }
  }, [currentTrack]);

  const shuffeleHandel = () => {
    alert("Еще не реализовано");
  };
  const prevHandel = () => {
    alert("Еще не реализовано");
  };
  const nextHandel = () => {
    alert("Еще не реализовано");
  };

  return (
    <>
      <audio loop={false} ref={audioRef} src={currentTrack.track_file}></audio>

      <S.Bar theme={theme}>
        <S.TimeTrack theme={theme}>
          {formatedCurrentTime}/{formatedDuration}
        </S.TimeTrack>
        <S.BarContent>
          <S.BarPlayerProgress
            theme={theme}
            type="range"
            step="0.01"
            value={currentTime}
            min={0}
            max={duration}
            onChange={onChange}
          ></S.BarPlayerProgress>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.BarPlayerControls>
                <S.BarPlayerBtnPrev onClick={prevHandel}>
                  <S.BarBtnPrevSvg theme={theme} alt="prev">
                    <use xlinkHref={theme.iconPrev}></use>
                  </S.BarBtnPrevSvg>
                </S.BarPlayerBtnPrev>
                <S.BarPlayerBtnPlay>
                  <S.BarPlayerBtnPlaySvg
                    theme={theme}
                    alt="play"
                    onClick={togglePlay}
                  >
                    <use
                      xlinkHref={isPlaying ? theme.iconPause : theme.iconPlay}
                    ></use>
                  </S.BarPlayerBtnPlaySvg>
                </S.BarPlayerBtnPlay>
                <S.BarPlayerBtnNext onClick={nextHandel}>
                  <S.BarPlayerBtnNextSvg theme={theme} alt="next">
                    <use xlinkHref={theme.iconNext}></use>
                  </S.BarPlayerBtnNextSvg>
                </S.BarPlayerBtnNext>
                <S.BarPlayerBtnIconHover theme={theme} onClick={toggleLoop}>
                  {isLoop ? (
                    <S.BarPlayerBtnRepeatSvgActive theme={theme} alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.BarPlayerBtnRepeatSvgActive>
                  ) : (
                    <S.BarPlayerBtnRepeatSvg theme={theme} alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.BarPlayerBtnRepeatSvg>
                  )}
                </S.BarPlayerBtnIconHover>
                <S.BarPlayerBtnIconHover onClick={shuffeleHandel}>
                  <S.BarPlayerBtnShuffleSvg alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  </S.BarPlayerBtnShuffleSvg>
                </S.BarPlayerBtnIconHover>
              </S.BarPlayerControls>

              <S.PlayerTrackPlay>
                <S.TrackPlayerContain>
                  <S.TrackPlayImg theme={theme}>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  </S.TrackPlayImg>
                  <S.TrackPlayerAuthor>
                    <S.TrackPlayerAuthorLink theme={theme}>
                      {currentTrack.name}
                    </S.TrackPlayerAuthorLink>
                  </S.TrackPlayerAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink theme={theme}>
                      {currentTrack.author}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayerContain>

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike>
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike>
                    <S.TrackPlayDisLikeSvg alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </S.TrackPlayDisLikeSvg>
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress>
                  <S.VolumeProgressLine
                    type="range"
                    name="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={updateVolume}
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  );
}
export default Player;
