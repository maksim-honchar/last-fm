import React from 'react'
import { useHistory } from 'react-router-dom'
import notFound from './pic/404-lamp-edit.png'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    wrapper: {
        marginTop: theme.spacing(15)
    },
    button: {
        margin: 'auto'
    }
}))

export const NotFound = () => {
    const classes = useStyles()
    const history = useHistory()

    const handleClick = () => history.push("/")

    return (
        <Grid
            className={classes.wrapper}
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs>
                <Typography variant="h2">
                    NOT FOUND!
                </Typography>
            </Grid>
            <Grid item xs>
                <img src={notFound} alt="not-found" style={{ maxWidth: '100%' }} />
            </Grid>
            <Grid item xs>
                <Button
                    className={classes.button}
                    variant="outlined"
                    color="secondary"
                    size="large"
                    onClick={handleClick}
                >
                    Back
                </Button>
            </Grid>
        </Grid>
    )
}