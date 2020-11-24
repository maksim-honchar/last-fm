import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { artistURL } from '../../app/utils'
import {
    artistNameA,
    artistPicA,
    artistTagsA,
    artistBioA,
    selectArtistName,
    selectArtistPic,
    selectArtistTags,
    selectArtistBio
} from './artistPageSlice'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 600,
        width: '100%',
        minHeight: '100vh',
        margin: '25px auto',
        border: '1px solid #e0e0e0'
    },
    item: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        margin: 'auto'
    },
    card_media: {
        maxWidth: 300,
        margin: 'auto'
    },
    tags: {
        margin: theme.spacing(1),
    },
    spinner: {
        marginTop: theme.spacing(20),
        textAlign: 'center'
    }
}))


export const ArtistPage = ({ match }) => {
    const { artist } = match.params

    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const artistName = useSelector(selectArtistName)
    const artistPic = useSelector(selectArtistPic)
    const artistTags = useSelector(selectArtistTags)
    const artistBio = useSelector(selectArtistBio)

    const tags = artistTags.map(tag =>
        <Typography key={tag.name} variant="subtitle2">
            <Grid item className={classes.tags}>
                {tag.name}
            </Grid>
        </Typography>
    )

    const handleClick = () => {
        history.goBack()
        dispatch(artistNameA(''))
        dispatch(artistPicA(''))
        dispatch(artistTagsA([]))
        dispatch(artistBioA(''))
    }

    useEffect(() => {
        const fetchData = () => async dispatch => {
            const request = await axios.get(`${artistURL}&artist=${artist}`)
            if (!request.data.error) {
                dispatch(artistNameA(request.data.artist.name))
                dispatch(artistPicA(request.data.artist.image[3]['#text']))
                dispatch(artistTagsA(request.data.artist.tags.tag))
                dispatch(artistBioA(request.data.artist.bio.summary))
            } else {
                dispatch(artistNameA(''))
                dispatch(artistPicA(''))
                dispatch(artistTagsA([]))
                dispatch(artistBioA(''))
                history.push("/404")
            }
        }
        dispatch(fetchData())
    }, [artist, dispatch])

    const artisPageContent = (
        <Card className={classes.card}>
            <Grid container direction="column">
                <Grid item xs className={classes.item}>
                    <CardActionArea>
                        <CardContent>
                            <Grid item xs className={classes.item}>
                                <Typography gutterBottom variant="h4" component="h2">
                                    {artistName}
                                </Typography>
                            </Grid>
                            <Grid item xs className={classes.item}>
                                <CardMedia
                                    component="img"
                                    alt={artistName}
                                    height="300"
                                    src={artistPic}
                                    title={artistName}
                                    className={classes.card_media}
                                />
                            </Grid>
                            <Grid item xs className={classes.item}>
                                <Grid container direction="row" justify="center">
                                    {tags}
                                </Grid>
                            </Grid>
                            <Grid item xs className={classes.item}>
                                <Typography color="textPrimary">
                                    {artistBio}
                                </Typography>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Grid>
                <Grid item xs className={classes.item}>
                    <CardActions>
                        <Button
                            className={classes.button}
                            variant="outlined"
                            color="secondary"
                            size="large"
                            onClick={handleClick}
                        >
                            Back
                    </Button>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    )

    const isLoad = Boolean(artistName) && Boolean(artistTags) && Boolean(artistBio)

    return (
        < section >
            {isLoad ? artisPageContent : <div className={classes.spinner}><CircularProgress /></div>}
        </section >
    )
}