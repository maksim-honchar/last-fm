import { createSlice } from '@reduxjs/toolkit';

export const topTracksSlice = createSlice({
  name: 'top_tracks',
  initialState: {
    data: [],
  },
  reducers: {
    topTracks: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { topTracks } = topTracksSlice.actions;

export default topTracksSlice.reducer
