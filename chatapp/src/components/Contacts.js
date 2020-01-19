import React from 'react';
import {connect} from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';


const Contacts = (props) => {

    const classes = useStyles();
    const users = props.userReducer

    return (
        <div>
            <p className="headers">Contacts</p>
            <div className={classes.contact}>
            
                {users.map(u => [
                    <List dense key={u._id} className={classes.root} >
                        
                        <ListItem  >
                            <ListItemAvatar>
                            <Avatar
                                alt={`eAvatar`}
                                src={`/static/images/avatar/.jpg`}
                            />
                            </ListItemAvatar>

                            <ListItemText primary={u.username} />
                        </ListItem>
                        <Divider variant="inset" component="li" />

                    </List>
                ])}
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer
    }
}

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    contact: {
        minHeight: '400px',
        maxHeight: '90vh'
    },
  }));

export default connect(mapStateToProps)(Contacts);
