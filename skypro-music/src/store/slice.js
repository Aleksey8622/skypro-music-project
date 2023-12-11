import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackList: [],
  currentTrack: null,
  shuffledList: [],
  isShuffledTrackList: false,
  isPlaying: false,
};

export const sliceTrackList = createSlice({
  name: "app",
  initialState,
  reducers: {
    getTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
    getPlayTrack: (state) => {
      state.isPlaying = true;
    },
    getPauseTrack: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { getTrack, getPlayTrack, getPauseTrack } = sliceTrackList.actions;
export default sliceTrackList.reducer;
