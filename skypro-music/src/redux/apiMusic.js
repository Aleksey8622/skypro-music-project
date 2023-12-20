import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const urlTracks = "https://skypro-music-api.skyeng.tech";
export const apiMusic = createApi({
  reducerPath: "apiMusic",
  baseQuery: fetchBaseQuery({ baseUrl: urlTracks }),
  endpoints: (build) => ({
    allTracks: build.query({
      query: () => "/catalog/track/all/",
    }),
    myFavoriteTracks: build.query({
      query: ({ token }) => ({
        url: "/catalog/track/favorite/all/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getAllTracksId: build.query({
      query: ({ id }) => `/catalog/selection/${id}/`,
    }),
  }),
});

export const myTracksApiMusic = createApi({
  reducerPath: "myTracksApiMusic",
  baseQuery: fetchBaseQuery({ baseUrl: urlTracks }),
  endpoints: (build) => ({
    addMyTracks: build.mutation({
      query: ({ token, id }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteMyTrack: build.mutation({
      query: ({ token, id }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useAllTracksQuery,
  useGetAllTracksIdQuery,
  useMyFavoriteTracksQuery,
} = apiMusic;
export const { useAddMyTracksMutation, useDeleteMyTrackMutation } =
  myTracksApiMusic;
