import React from 'react';
import { withStore } from '../Store';
import { Button, TextField, Grid } from '@material-ui/core';
import Parse from 'parse';

export default withStore(function (props: any) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password2, setPassword2] = React.useState("");
    function signup() {
        if (password === password2) {
            // initialize new user
            var user = new Parse.User();
            user.set("username", email);
            user.set("password", password);
            user.set("email", email);
            //user.set("home", ); geopoint
            user.set("out", false); //true if user is outdoors
            try {
                // try to create user then set current user in store
                user.signUp().then(usr => {
                    props.setUser(usr);
                    props.setModification(false);
                });
            } catch (error) {
                alert("Error: " + error.code + " " + error.message);
            }
        }
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
                <TextField variant="outlined" type='password' fullWidth label="Repeat Password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
            </Grid>
            <Grid item>
                <Button variant='contained' color='primary' size="large" fullWidth onClick={signup}>Sign up</Button>
            </Grid>
        </Grid>

    )
})