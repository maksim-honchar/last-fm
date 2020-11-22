import { configureStore } from '@reduxjs/toolkit'
import topTracksReducer from '../features/homepage/topTracksSlice'
import artistReducer from '../features/artistpage/artistPageSlice'
import findTrackReducer from '../features/search_track_page/searchTrackSlice'

export default configureStore({
  reducer: {
    top_tracks: topTracksReducer,
    performer: artistReducer,
    find_track: findTrackReducer
  }
})
