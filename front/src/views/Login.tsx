import React from 'react';
import { Button, Grid, Card, CardContent, ButtonGroup, Collapse } from '@material-ui/core';
import Signin from '../components/Signin'
import Signup from '../components/Signup';


// login and sign up view, when no user loged
export default function (props: any) {
    const [open, setOpen] = React.useState(false);
    return (
        <Card>
            <CardContent>
                <Grid container justify='center'><Grid item>
                    <ButtonGroup>
                        <Button color="primary" variant={open ? "outlined" : "contained"} onClick={() => setOpen(false)}>Login</Button>
                        <Button color="primary" variant={open ? "contained" : "outlined"} onClick={() => setOpen(true)}>Sign up</Button>
                    </ButtonGroup>
                </Grid></Grid>
            </CardContent>
            <CardContent>
                <Collapse in={!open}><Signin /></Collapse>
                <Collapse in={open}><Signup /></Collapse>
            </CardContent>
        </Card>
    )
}