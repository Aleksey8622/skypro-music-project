import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const urlTracks = "https://skypro-music-api.skyeng.tech";
export const apiMusic = createApi({
  reducerPath: "apiMusic",
  baseQuery: fetchBaseQuery({ baseUrl: urlTracks }),
  endpoints: (build) => ({
    allTracks: build.query({
      query: () => "/catalog/track/all/",
    }),
    getAllTracksId: build.query({
        query:({id}) => `/catalog/selection/${id}/`
    })
  }),
});

export const myTracksApiMusic = createApi({
  reducerPath: "myTracksApiMusic",
  baseQuery: fetchBaseQuery({ baseUrl: urlTracks }),
  endpoints: (build) => ({
    addMyTracks: build.mutation({
      query: ({ body, id }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAllTracksQuery, useGetAllTracksIdQuery } = apiMusic;
export const { useAddMyTracksMutation } = myTracksApiMusic;
