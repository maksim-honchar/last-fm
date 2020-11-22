import { createSlice } from '@reduxjs/toolkit'

export const topTracksSlice = createSlice({
  name: 'top_tracks',
  initialState: {
    pages: {},
    tracks: [],
  },
  reducers: {
    topTracks: (state, action) => {
      state.tracks = action.payload
    },
    pagesInfo: (state, action) => {
      state.pages = action.payload
    }
  }
})

export const { topTracks, pagesInfo } = topTracksSlice.actions

export const selectTotalPages = state => state.top_tracks.pages.totalPages

export const selectTopTracks = state => state.top_tracks.tracks

export default topTracksSlice.reducer
