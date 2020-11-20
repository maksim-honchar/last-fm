import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}))

export const TopTabs = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    const history = useHistory()

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    useEffect(() => {
        switch (value) {
            case 0:
                history.push("/")
                break;
            case 1:
                history.push("/search")
                break;
            default:
                history.push("/")
        }
    }, [history, value])


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="tabs">
                    <Tab label="Home" />
                    <Tab label="Find a song" />
                </Tabs>
            </AppBar>
        </div>
    )
}
