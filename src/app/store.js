import { configureStore } from '@reduxjs/toolkit'
import topArtistsReducer from '../features/homepage/topArtistsSlice'

export default configureStore({
  reducer: {
    top_artists: topArtistsReducer
  }
})
