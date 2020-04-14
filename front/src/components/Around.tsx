import React from 'react';
import { withStore } from '../Store';
import Parse from 'parse';
import { Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "60px",
        width: '250px',
    }
}));


// Number of people outdoors, around
export default withStore(function (props: any) {
    const classes = useStyles();
    const [people, setPeople] = React.useState(0);
    React.useEffect(() => {
        const query = new Parse.Query(Parse.User);
        query.withinKilometers("home", props.user.get('home'), 2);
        query.equalTo("out", true);
        query.count().then(result => {
            setPeople(result)
        })

    }, [props.user])
    return (
        <Paper elevation={3} className={classes.container}>
            <Grid container justify='center'>
                <Grid item>
                    <Typography variant='h5' color="primary">{people} people outdoors</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
})