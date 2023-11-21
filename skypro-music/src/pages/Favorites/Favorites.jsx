import Navigation from "../../componets/Navigation/Navigation";
import Player from "../../componets/Player/Player";
import * as S from "../Main/MainStyle";

export function Favorites({ currentTrack }) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Navigation />
          <div>
            <h2>Favorites</h2>
          </div>
        </S.Main>
        {currentTrack && <Player currentTrack={currentTrack} />}
      </S.Container>
    </S.Wrapper>
  );
}
