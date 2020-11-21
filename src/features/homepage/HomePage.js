import React, { useEffect, useState } from 'react'
import { topTracksURL } from '../../app/utils'
import { useDispatch, useSelector } from 'react-redux'
import { topTracks, pagesInfo } from './topTracksSlice'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    pagination: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}))

export const HomePage = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [page, setPage] = useState(1)

    const tracks = useSelector(state => state.top_tracks.tracks)
    const amountPages = useSelector(state => state.top_tracks.pages.totalPages)
    const amountPagesNum = Number(amountPages)
    // console.log(tracks)
    // console.log(amountPages)

    let listTracks

    if (tracks) {
        listTracks = tracks.map((track, index) => <p key={index}>{track.name} - {track.artist.name}</p>)
    }


    const handleChangePage = (event, newPage) => {
        setPage(newPage)
        console.log(newPage)
    }


    useEffect(() => {
        const fetchData = () => async dispatch => {
            const request = await axios.get(`${topTracksURL}&page=${page}`)
            dispatch(topTracks(request.data.tracks.track))
            dispatch(pagesInfo(request.data.tracks['@attr']))
        }
        dispatch(fetchData())
    }, [dispatch, page])

    return (
        <section>
            <Typography variant="h4">
                top tracks
            </Typography>
            {listTracks}
            <div className={classes.pagination}>
                <Pagination
                    count={amountPagesNum}
                    color="secondary"
                    page={page}
                    onChange={handleChangePage}
                />
            </div>
        </section>
    )
}