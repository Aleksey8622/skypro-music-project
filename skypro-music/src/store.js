import { configureStore } from "@reduxjs/toolkit";
import sliceTrackList from "./store/slice";

export const store = configureStore({
  reducer: {
    app: sliceTrackList,
  },
});
