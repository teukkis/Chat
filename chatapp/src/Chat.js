import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import Contacts from './components/Contacts';
import Messages from './components/Messages';
import UserInfo from './components/UserInfo';

import { initMessages } from './reducers/messageReducer'
import { getAllUsers } from './reducers/userReducer'
import { getCurrentUser } from './reducers/currentUserReducer'

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './style.scss';

const mapDispatchToProps = {
  initMessages,
  getAllUsers,
  getCurrentUser,
}

const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer,
    currentUserReducer: state.currentUserReducer
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minWidth:'300px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
  },
  grid: {
    minWidth:'250px'
  }
}));

const Chat = (props) => {

  const classes = useStyles();

  useEffect(() => {
    props.initMessages()
    props.getAllUsers()
    props.getCurrentUser(props.loginReducer.data.user)
  }, [props.loginReducer.data.user, props.getCurrentUser])  

  return (

    <Container fixed={true}>
      <div className={classes.root}>

        <Grid className="emptyNav"></Grid>

        <Grid container spacing={1}>

          <Grid className={classes.grid} item lg={3}>
            <Paper elevation={5} className={classes.paper}>
              <Contacts />  
            </Paper>
          </Grid>

          <Grid className={classes.grid} item lg={5}>
            <Paper elevation={10} className={classes.paper}>
              <Messages />
            </Paper>
          </Grid>

          <Grid className={classes.grid} item lg={4}>
            <Paper elevation={5} className={classes.paper}>
              <UserInfo />
            </Paper>
          </Grid>
          
        </Grid>

      </div>
    </Container>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(Chat);
