import { createSlice } from '@reduxjs/toolkit'

export const findTrackSlice = createSlice({
    name: 'find_track',
    initialState: {
        info: [],
        amount: 0
    },
    reducers: {
        findTrackA: (state, action) => {
            state.info = action.payload
        },
        amountTracksA: (state, action) => {
            state.amount = action.payload
        }
    }
})

export const { findTrackA, amountTracksA } = findTrackSlice.actions

export const selectFindTrack = state => state.find_track.info

export const selectAmountPages = state => Math.floor(state.find_track.amount / 30)

export default findTrackSlice.reducer
