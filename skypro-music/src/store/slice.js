import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackList: [],
  currentTrack: null,
  shuffledList: [],
  isShuffledTrackList: false,
  $isPlaying: true,
  filteredTracks: [],
  tracksForFilter: [],
  isFiltred: false,
  filters: { genre: "", author: "", years: "", search: "" },
};

export const sliceTrackList = createSlice({
  name: "music",
  initialState,
  reducers: {
    getCleanTheFilter: (state) => {
      if (!state.filters.author) {
        state.isFiltred = false;
        return;
      }
    },
    setFilters: (state, action) => {
      state.filters[action.payload.nameFilter] = action.payload.valueFilter;
      state.filteredTracks = state.tracksForFilter;

      if (
        !state.filters.genre &&
        !state.filters.author &&
        !state.filters.years &&
        !state.filters.search
      ) {
        state.isFiltred = false;
        return;
      }

      state.isFiltred = true;

      if (state.filters.genre) {
        state.filteredTracks = state.filteredTracks.filter(
          (elem) => elem.genre === state.filters.genre
        );
      }

      if (state.filters.author) {
        state.filteredTracks = state.filteredTracks.filter(
          (elem) => elem.author === state.filters.author
        );
      }
      if (state.filters.years) {
        state.filteredTracks = state.filteredTracks.filter(
          (elem) => elem.years === state.filters.years
        );
      }
      if (state.filters.search) {
        state.filteredTracks = state.filteredTracks.filter((track) => {
          return (
            track.name
              .toLowerCase()
              .includes(state.filters.search.toLowerCase()) ||
            track.author
              .toLowerCase()
              .includes(state.filters.search.toLowerCase())
          );
        });
      }
    },
    getAllTrack: (state, action) => {
      state.currentTrack = action.payload;
      state.trackList = action.payload.data;
      state.shuffledList = action.payload.data;

      // console.log((state.currentTrack = action.payload));
    },
    getPlayTrack: (state) => {
      state.$isPlaying = true;
    },
    getPauseTrack: (state) => {
      state.$isPlaying = false;
    },
    getNextTrack: (state) => {
      const allTrackList = state.isShuffledTrackList
        ? state.shuffledList.sort(() => Math.random() - 0.5)
        : state.trackList;

      const tracksIndex = allTrackList.findIndex((track) => {
        // console.log(track.id);
        return track.id === state.currentTrack.id;
      });

      if (allTrackList[tracksIndex + 1]) {
        state.currentTrack = allTrackList[tracksIndex + 1];
      }
    },
    getPrevTrack: (state) => {
      const allTrackList = state.isShuffledTrackList
        ? state.shuffledList
        : state.trackList;

      const tracksIndex = allTrackList.findIndex((track) => {
        // console.log(track.id);
        return track.id === state.currentTrack.id;
      });

      if (allTrackList[tracksIndex - 1]) {
        state.currentTrack = allTrackList[tracksIndex - 1];
      }
    },
    getTracksListShuffled: (state) => {
      state.isShuffledTrackList = !state.isShuffledTrackList;
    },
    setTrackListForFilter: (state, action) => {
      state.tracksForFilter = action.payload;
    },
  },
});

export const {
  getAllTrack,
  getPlayTrack,
  getPauseTrack,
  getNextTrack,
  getPrevTrack,
  getTracksListShuffled,
  setFilters,
  setTrackListForFilter,
} = sliceTrackList.actions;
export default sliceTrackList.reducer;

// создать акшен СетФилтерс
//Создать стайт
// Акшен передаем 2 значениея 1 значение фильтер(равен либо авторы либо года либо ) 2 значение валью
// акшен проверяет если пришел что и оно там есть я это удаляю если нету то добавляю
// в самом компоненте создать функцию на кажный элемент списка
