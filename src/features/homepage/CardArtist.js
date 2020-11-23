import React from 'react'
import { useSelector } from 'react-redux'
import { selectTopTracks } from './topTracksSlice'
import { Link } from 'react-router-dom'
import './HomePage.css'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    grid_item: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    typography: {
        paddingTop: theme.spacing(1),
    }
}))


export const CardArtist = () => {
    const classes = useStyles()
    const tracks = useSelector(selectTopTracks)

    let listTracks

    if (tracks) {
        listTracks = tracks.map((track, index) =>
            <Grid item lg={3} key={index} className={classes.grid_item}>
                <Card>
                    <CardActionArea>
                        <Link to={`/artists/${track.artist.name}`} className="link">
                            <Typography color="textPrimary" variant="h6" gutterBottom className={classes.typography}>
                                {track.name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p" gutterBottom>
                                {track.artist.name}
                            </Typography>
                            <CardMedia
                                component="img"
                                alt={track.name}
                                height="300"
                                image={track.image[3]['#text']}
                                title={track.name}
                            />
                            <CardContent>
                            </CardContent>
                        </Link>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="secondary" variant="outlined">
                            <a href={track.artist.url} target="_blank" rel="noreferrer" className="link button-link">
                                [ {track.artist.name} ] on Last.fm
                            </a>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }

    return (
        <article>
            <Grid container justify='center'>
                {listTracks}
            </Grid>
        </article>
    )
}