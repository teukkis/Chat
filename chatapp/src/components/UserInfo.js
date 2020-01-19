
import React, {useState} from 'react';
import { connect } from 'react-redux'
import { logout } from '../reducers/loginReducer'
import {changeStatus} from '../reducers/profileReducer'

import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip'
import clsx from 'clsx';
import BorderColorIcon from '@material-ui/icons/BorderColor'
import LocationIcon from '@material-ui/icons/LocationOn'
import CommentIcon from '@material-ui/icons/Comment'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LockIcon from '@material-ui/icons/Lock'
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { TextField } from '@material-ui/core';


const UserInfo = (props) => {

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState('')
  const [location, setLocation] = useState('')
  const [icon, setIcon] = useState('')


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLogout = () => {
    window.localStorage.removeItem('loggedUser')
    props.logout(props.loginReducer.data.user)
  }

  const handleStatusChange = (event) => {
    setStatus(event.target.value)
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const handleIconChange = (event) => {
    setIcon(event.target.value)
  }

  const handleStatusSubmit = () => {

    const newUserProfile = {
      username: props.loginReducer.data.user,
      status: status,
      location: props.currentUserReducer.location,
      icon: props.currentUserReducer.icon
    }
   
    props.changeStatus(newUserProfile)
     
  }

  const handleLocationSubmit = () => {

    const newUserProfile = {
      username: props.loginReducer.data.user,
      status: props.currentUserReducer.status,
      location: location,
      icon: props.currentUserReducer.icon
    }
   
    props.changeStatus(newUserProfile)
    
  }

  const handleIconSubmit = () => {

    const newUserProfile = {
      username: props.loginReducer.data.user,
      status: props.currentUserReducer.status,
      location: props.currentUserReducer.location,
      icon: icon
    }
   
    props.changeStatus(newUserProfile)
    
  }


  return (
      <div>
      <p className="headers">Profile</p>
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            tv
          </Avatar>
        }
        action={
            <Tooltip title="Logout" arrow>
            <IconButton aria-label="logout" onClick={handleLogout}>
              <LockIcon />
            </IconButton>
            </Tooltip>
          }
        title={props.loginReducer.data.user}
        
      />
      

      <CardContent>
      

          <TextField
            label="your status"
            value={status}
            onChange={handleStatusChange}
            id="status"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CommentIcon />
                </InputAdornment>
              ),
            }}
          />
          
            <IconButton onClick={handleStatusSubmit}>
            <BorderColorIcon />
            </IconButton>


            <TextField
            label="your location"
            value={location}
            onChange={handleLocationChange}
            id="location"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                <LocationIcon />
                </InputAdornment>
              ),
            }}
          />
          
            <IconButton onClick={handleLocationSubmit}>
            <BorderColorIcon />
            </IconButton>


            <TextField
            label="Change icon"
            value={icon}
            onChange={handleIconChange}
            id="icon"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          
            <IconButton onClick={handleIconSubmit}>
              <BorderColorIcon />
            </IconButton>



      </CardContent>
      <CardActions disableSpacing>
      
        <IconButton aria-label="add to favorites">
          <FavoriteIcon  />
        </IconButton>
        
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      
    </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        loginReducer: state.loginReducer,
        userReducer: state.userReducer,
        currentUserReducer: state.currentUserReducer
    }
}
 
const mapDispatchToProps = {
    logout,
    changeStatus,
}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  textfields: {
    margin: theme.spacing(1),
    paddingBottom: 15
  }
  
}));


export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
