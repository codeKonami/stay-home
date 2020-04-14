import React from 'react';
import { withStore } from '../Store';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '250px',
        height: '250px',
        borderRadius: "250px"
    }
}));

// distance to home
export default withStore(function (props: any) {
    const classes = useStyles();
    const [distance, setDistance] = React.useState(0);
    const [message, setMessage] = React.useState("");
    React.useEffect(() => {

        const home = props.user.get('home')
        if (home && props.location) {
            const earthRadius = 6371000; // radius in meters
            const latDelta = (props.location.latitude - home.latitude) * Math.PI / 180
            const lonDelta = (props.location.longitude - home.longitude) * Math.PI / 180

            const lat1Rad = props.location.latitude * Math.PI / 180
            const lat2Rad = home.latitude * Math.PI / 180

            const a = Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
                Math.sin(lonDelta / 2) * Math.sin(lonDelta / 2) *
                Math.cos(lat1Rad) * Math.cos(lat2Rad)

            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
            const dist = Math.floor(earthRadius * c)
            setDistance(dist)
            if (dist > 30 && props.user.get('out') === false) {
                props.user.set('out', true)
                props.user.save();
            } else if (dist <= 30 && props.user.get('out') === true) {
                props.user.set('out', false)
                props.user.save();
            }
        }
    }, [props.user,props.location])
    React.useEffect(() => {
        if (distance > 30) {
            setMessage(`${distance}m`)
        } else {
            setMessage("Home")
        }
    }, [distance])
    return (
        <Paper elevation={3} className={classes.container}>
            <Typography variant='h3' color="primary">{message}</Typography>
        </Paper>
    )
})