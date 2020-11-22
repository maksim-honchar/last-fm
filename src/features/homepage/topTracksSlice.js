import { createSlice } from '@reduxjs/toolkit'

export const topTracksSlice = createSlice({
  name: 'top_tracks',
  initialState: {
    pages: {},
    tracks: [],
  },
  reducers: {
    topTracksA: (state, action) => {
      state.tracks = action.payload
    },
    pagesInfoA: (state, action) => {
      state.pages = action.payload
    }
  }
})

export const { topTracksA, pagesInfoA } = topTracksSlice.actions

export const selectTotalPages = state => state.top_tracks.pages.totalPages

export const selectTopTracks = state => state.top_tracks.tracks

export default topTracksSlice.reducer
