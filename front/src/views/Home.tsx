import React from 'react';
import Distance from '../components/Distance';
import Around from '../components/Around';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// space between these two components
const useStyles = makeStyles(theme => ({
    around: {
        paddingTop:theme.spacing(10)
    }
}));

// display de distance to home and the number of people outdoors around
export default function (props: any) {
    const classes = useStyles();
    return (
        <Grid container alignItems="center" direction='column'>
            <Grid item><Container><Distance /></Container></Grid>
            <Grid item className={classes.around}><Container><Around /></Container></Grid>
        </Grid>
    )
}