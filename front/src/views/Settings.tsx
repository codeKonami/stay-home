import React from 'react';
import { withStore } from '../Store';
import { Button, Grid, Card, CardContent, Icon, CircularProgress } from '@material-ui/core';
import Parse from 'parse';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    exitButton: {
        color: theme.palette.error.main,
    },
    saveButton: {
        color: theme.palette.success.main,
    },
}));

export default withStore(function (props: any) {
    const classes = useStyles();
    const [load, setLoad] = React.useState(false);
    const [done, setDone] = React.useState(false);
    function homeUpdate() {
        setLoad(true);
        props.user.set('home', props.location)
        props.user.save().then((usr: Parse.User) => {
            props.setUser(usr);
            setLoad(false);
            setDone(true);
        });

    }
    function logout() {
        Parse.User.logOut().then(() => {
            props.setUser(Parse.User.current());
        });
    }
    return (
        <Card>
            <CardContent>
                <Grid container spacing={3} direction='column'>
                    <Grid item className={classes.saveButton}>
                        <Button size="large"
                            variant='outlined' color={done ? "inherit" : "primary"} fullWidth onClick={homeUpdate}
                            endIcon={load ? <CircularProgress size={20} /> : <Icon>{done ? "done" : "save"}</Icon>}
                        >Update Home Location</Button>
                    </Grid>
                    <Grid item className={classes.exitButton}>
                        <Button variant='outlined' fullWidth onClick={logout} size="large"
                            color="inherit"
                            endIcon={<Icon>exit_to_app</Icon>}
                        >Logout</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
})