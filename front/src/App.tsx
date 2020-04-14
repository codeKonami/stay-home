import React from 'react';
import './App.css';

//Store Consumer
import { withStore } from './Store';

// Theme for Material UI
import withTheme from './Theme'

//Views
import Settings from './views/Settings';
import Home from './views/Home';
import Login from './views/Login';


import { Grid } from '@material-ui/core';
import Header from './components/Header';
import { makeStyles } from '@material-ui/core/styles';

import Parse from 'parse';

// Initialize Parse
Parse.initialize('stayhome');
Parse.serverURL = 'http://localhost:1337/parse';


const useStyles = makeStyles(theme => ({
  // Full background
  backGround: {
    backgroundColor: theme.palette.primary.main,
    height: '100vh'
  },
  // Container for differents views
  // Header position is fixed => we set paddingTop for container
  container: {
    paddingTop: theme.spacing(10),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  }
}));


// If user is loged, return Home or Settings, else return Login
export default withTheme(withStore(function (props: any) {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Grid container justify="center" className={classes.backGround}>
        <Grid item sm={6} xs={12} className={classes.container}>
          {props.user ? props.modification ? <Settings /> : <Home /> : <Login />}
        </Grid>
      </Grid>
    </div>
  );
}))
