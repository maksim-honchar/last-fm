import { configureStore } from '@reduxjs/toolkit'
import topTracksReducer from '../features/homepage/topTracksSlice'
import artistReducer from '../features/artistpage/artistPageSlice'

export default configureStore({
  reducer: {
    top_tracks: topTracksReducer,
    performer: artistReducer
  }
})
