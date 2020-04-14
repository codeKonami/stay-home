import React from 'react';
import { withStore } from '../Store';
import { Button, TextField, Grid } from '@material-ui/core';
import Parse from 'parse';

export default withStore(function (props: any) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    function login() {
        // try to login then set current user in store
        Parse.User.logIn(email, password).then(usr => {
            props.setUser(usr);
            props.setModification(false);
        });
    }
    return (
        <Grid container spacing={3} direction="column">
            <Grid item>
                <TextField variant="outlined" type='email' fullWidth label="Email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item>
                <TextField variant="outlined" type='password' fullWidth label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Grid>
            <Grid item>
                <Button variant='contained' color='primary' size="large" fullWidth onClick={login}>Login</Button>
            </Grid>
        </Grid>
    )
})