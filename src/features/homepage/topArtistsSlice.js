import { createSlice } from '@reduxjs/toolkit';

export const topArtistsSlice = createSlice({
  name: 'top_artists',
  initialState: {
    data: [],
  },
  reducers: {
    topArtists: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { topArtists } = topArtistsSlice.actions;

export const selectTopArtists = state => state.top_artists.data

export default topArtistsSlice.reducer;
