import { createSlice } from '@reduxjs/toolkit'

export const artistSlice = createSlice({
    name: 'performer',
    initialState: {
        name: '',
        photo: '',
        tags: [],
        biography: ''
    },
    reducers: {
        artistNameA: (state, action) => {
            state.name = action.payload
        },
        artistPicA: (state, action) => {
            state.photo = action.payload
        },
        artistTagsA: (state, action) => {
            state.tags = action.payload
        },
        artistBioA: (state, action) => {
            state.biography = action.payload
        }
    }
})

export const { artistNameA, artistPicA, artistTagsA, artistBioA } = artistSlice.actions

export const selectArtistName = state => state.performer.name

export const selectArtistPic = state => state.performer.photo

export const selectArtistTags = state => state.performer.tags

export const selectArtistBio = state => state.performer.biography

export default artistSlice.reducer
