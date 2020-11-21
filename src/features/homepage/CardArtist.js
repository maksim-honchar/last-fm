import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
})

export const CardArtist = () => {
    const classes = useStyles()

    const tracks = useSelector(state => state.top_tracks.tracks)

    let listTracks

    if (tracks) {
        listTracks = tracks.map((track, index) =>
            <Card className={classes.card}>
                <a href={track.artist.url} target="_blank" rel="noreferrer">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={track.name}
                            height="300"
                            image={track.image[3]['#text']}
                            title={track.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {track.name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {track.artist.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </a>
                <CardActions>
                    <Button size="small" color="primary">
                        {track.artist.name} on Last.fm
                    </Button>
                </CardActions>
            </Card>
        )
    }

    return (
        <article>
            {listTracks}
        </article>
    )
}