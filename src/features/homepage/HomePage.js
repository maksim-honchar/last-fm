import React, { useEffect } from 'react'
import { topTracksURL } from '../../app/utils'
import { useDispatch, useSelector } from 'react-redux'
import { topTracks } from './topTracksSlice'


export const HomePage = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        const fetchTopArtists = () => async dispatch => {
            const request = await fetch(topTracksURL)
            const response = await request.json()
            dispatch(topTracks(response))
        }
        dispatch(fetchTopArtists())
    }, [dispatch])

    return (
        <h2>Home Page</h2>
    )
}