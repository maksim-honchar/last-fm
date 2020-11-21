import { configureStore } from '@reduxjs/toolkit'
import topTracksReducer from '../features/homepage/topTracksSlice'

export default configureStore({
  reducer: {
    top_tracks: topTracksReducer
  }
})
