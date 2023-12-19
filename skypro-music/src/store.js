import { configureStore } from "@reduxjs/toolkit";
import sliceTrackList from "./store/slice";
import { apiMusic, myTracksApiMusic } from "./redux/apiMusic";

export const store = configureStore({
  reducer: {
    music: sliceTrackList,
    [apiMusic.reducerPath]: apiMusic.reducer,
    [myTracksApiMusic.reducerPath]: myTracksApiMusic.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware()
      .concat(apiMusic.middleware)
      .concat(myTracksApiMusic.middleware),
});
