import React, {useEffect, useRef} from 'react';
import Oldmessages from './OldMessages'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';




const PostedMessages = ({messages, user}) => {

    const messageEndRef = useRef(null)
    
    const scrollToBottom = () => {
        messageEndRef.current.scrollIntoView({ behavior: "auto" })
    }
    useEffect(scrollToBottom, [messages]);

    const classes = useStyles();


    return (

        <div>

            <Oldmessages />

            {messages.flatMap((message, index) => [

                <List className={classes.root} key={index}>
                <ListItem alignItems="flex-start">

                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>

                    <ListItemText
                        primary={user}
                        secondary={
                            <React.Fragment>
                            <br />
                            {message}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                
                <Divider variant="inset" component="li" />
        
            </List>
            ])}
            
            <div ref={messageEndRef} />
        </div>
        
    )
}

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));


export default PostedMessages;
