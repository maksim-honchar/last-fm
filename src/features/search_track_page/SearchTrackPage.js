import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { findTrackA, amountTracksA, selectFindTrack, selectAmountPages } from './searchTrackSlice'
import { findTrackURL } from '../../app/utils'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    pagination: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5)
    }, search_output: {
        padding: theme.spacing(0, 2),
    }
}))

export const SearchTrackPage = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [nameTrack, setNameTrack] = useState(' ')
    const [page, setPage] = useState(1)

    const handleChangePage = (event, newPage) => setPage(newPage)


    const handleChange = (e) => {
        if (e.target.value !== '') {
            setNameTrack(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const fetchData = () => async dispatch => {
            const request = await axios.get(`${findTrackURL}&track=${nameTrack}&page=${page}`)
            dispatch(findTrackA(request.data.results.trackmatches.track))
            dispatch(amountTracksA(request.data.results['opensearch:totalResults']))
        }
        dispatch(fetchData())
    }

    const amountPages = useSelector(selectAmountPages)
    const tracks = useSelector(selectFindTrack)

    const listTracks = tracks.map((track, index) =>
        <Typography paragraph key={index}>
            {track.name} - {track.artist}
        </Typography>
    )

    useEffect(() => {
        const fetchData = () => async dispatch => {
            const request = await axios.get(`${findTrackURL}&track=${nameTrack}&page=${page}`)
            dispatch(findTrackA(request.data.results.trackmatches.track))
            dispatch(amountTracksA(request.data.results['opensearch:totalResults']))
        }
        dispatch(fetchData())
    }, [page, dispatch])

    const searchTrackPageContent = (

        <Grid container direction="column" justify="center" alignItems="center">
            <div className={classes.search_output}>
                <Grid item xs>
                    {listTracks}
                </Grid>
            </div>
            <Grid item xs>
                <div className={classes.pagination} >
                    <Pagination
                        count={amountPages}
                        color="secondary"
                        page={page}
                        onChange={handleChangePage}
                    />
                </div>
            </Grid>
        </Grid>

    )

    const isLoad = Boolean(amountPages) && Boolean(tracks)

    return (
        <Grid container component="main" className={classes.root} justify="center">
            <CssBaseline />
            <Grid item xs={12} sm={8} md={5}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <SearchIcon />
                    </Avatar>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="song-search"
                            label="name of the track"
                            id="song-search"
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSubmit}
                        >
                            Find
                        </Button>
                    </form>
                </div>
                <div>
                    {isLoad ? searchTrackPageContent : null}
                </div>
            </Grid>
        </Grid>
    )
}