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


const useStyles = makeStyles({
    card: {
        // maxWidth: 345,
        width: '100%',
        minHeight: '100vh'
    },
})


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
        <Typography color="secondary" key={tag.name}>
            {tag.name}
        </Typography>
    )

    const handleClick = () => {
        history.push('/')
        dispatch(artistNameA(''))
        dispatch(artistPicA(''))
        dispatch(artistTagsA([]))
        dispatch(artistBioA(''))
    }

    useEffect(() => {
        const fetchData = () => async dispatch => {
            const request = await axios.get(`${artistURL}&artist=${artist}`)
            dispatch(artistNameA(request.data.artist.name))
            dispatch(artistPicA(request.data.artist.image[3]['#text']))
            dispatch(artistTagsA(request.data.artist.tags.tag))
            dispatch(artistBioA(request.data.artist.bio.summary))
        }
        dispatch(fetchData())
    }, [artist, dispatch])

    return (
        < section >
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {artistName}
                        </Typography>
                        <CardMedia
                            component="img"
                            alt={artistName}
                            style={{ width: 300, margin: 'auto' }}
                            height="300"
                            src={artistPic}
                            title={artistName}
                        />
                        <div>
                            {tags}
                        </div>
                        <Typography>
                            {artistBio}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button color="primary" onClick={handleClick}>
                        Back
                    </Button>
                </CardActions>
            </Card>
        </section >
    )

}