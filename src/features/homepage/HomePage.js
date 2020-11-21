import React, { useEffect } from 'react'
import { topArtistsURL } from '../../app/utils'
import { useDispatch, useSelect } from 'react-redux'
import { topArtists, selectTopArtists } from './topArtistsSlice'


export const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchTopArtists = () => async dispatch => {
            const request = await fetch(topArtistsURL)
            const response = await request.json()
            dispatch(topArtists(response))
        }
        dispatch(fetchTopArtists())
    }, [dispatch])

    return (
        <h2>Home Page</h2>
    )
}