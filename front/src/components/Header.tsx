import React from 'react';
import { withStore } from '../Store';
import { AppBar, Typography, Toolbar, IconButton, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
    },
}));

// if there no user loged, there is no button
// the button toogles the settings display
export default withStore(function (props: any) {
    const classes = useStyles();
    return (
        <AppBar position="fixed" elevation={0}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>

                </Typography>
                {props.user ?
                    <IconButton edge="end" color="inherit" onClick={() => props.setModification(!props.modification)}>
                        <Icon>{props.modification ? 'undo' : 'settings'}</Icon>
                    </IconButton> : null
                }
            </Toolbar>
        </AppBar>
    )
})