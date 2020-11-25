import { configureStore } from '@reduxjs/toolkit'
import topTracksReducer from '../features/homepage/topTracksSlice'
import artistReducer from '../features/artistpage/artistPageSlice'
import findTrackReducer from '../features/search_track_page/searchTrackSlice'

import { loadState, saveState } from './localeStorage'
import throttle from 'lodash.throttle'

const persistedState = loadState()

const store = configureStore({
  reducer: {
    top_tracks: topTracksReducer,
    performer: artistReducer,
    find_track: findTrackReducer
  },
  persistedState
})

store.subscribe(throttle(() => {
  saveState({
    top_tracks: store.getState().top_tracks,
    performer: store.getState().performer,
    find_track: store.getState().performer
  })
}, 1000))


export default store