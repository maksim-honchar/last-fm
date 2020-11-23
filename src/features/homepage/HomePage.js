import React, { useEffect, useState } from 'react'
import { topTracksURL } from '../../app/utils'
import { useDispatch, useSelector } from 'react-redux'
import { topTracksA, pagesInfoA, selectTotalPages, selectTopTracks } from './topTracksSlice'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

import { CardArtist } from './CardArtist'

const useStyles = makeStyles((theme) => ({
    pagination: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5)
    },
    spinner: {
        marginTop: theme.spacing(20)
    }
}))

export const HomePage = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [page, setPage] = useState(1)

    const tracks = useSelector(selectTopTracks)
    const amountPages = useSelector(selectTotalPages)
    const amountPagesNum = Number(amountPages)

    const handleChangePage = (event, newPage) => setPage(newPage)

    useEffect(() => {
        const fetchData = () => async dispatch => {
            const request = await axios.get(`${topTracksURL}&page=${page}`)
            dispatch(topTracksA(request.data.tracks.track))
            dispatch(pagesInfoA(request.data.tracks['@attr']))
        }
        dispatch(fetchData())
    }, [dispatch, page])

    const homePageContent = (
        <React.Fragment>
            <div className={classes.pagination}>
                <Pagination
                    count={amountPagesNum}
                    color="secondary"
                    page={page}
                    onChange={handleChangePage}
                />
            </div>
            <div>
                <CardArtist />
            </div>
            <div className={classes.pagination}>
                <Pagination
                    count={amountPagesNum}
                    color="secondary"
                    page={page}
                    onChange={handleChangePage}
                />
            </div>
        </React.Fragment>
    )

    const isLoad = Boolean(amountPages) && Boolean(tracks)

    return (
        <section>
            <Grid container justify='center'>
                {isLoad ? homePageContent : <div className={classes.spinner}><CircularProgress /></div>}
            </Grid>
        </section>
    )
}