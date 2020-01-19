import React, {useEffect, useRef} from 'react'
import { connect } from 'react-redux' 

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


const Testi = (props) => {

    const classes = useStyles();
    const messageEndRef = useRef(null)
    
    const scrollToBottom = () => {
        messageEndRef.current.scrollIntoView({ behavior: "auto" })
    }
    useEffect(scrollToBottom, [props.messageObject]);

    return (
        <div >
        {props.messageObject.map(ms => [
           
            <List className={classes.root} key={ms._id}>
                <ListItem alignItems="flex-start" >

                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>

                    <ListItemText
                    primary={ms.user}
                    secondary={
                        <React.Fragment>
                        <br />
                        {ms.message}
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


const mapStateToProps = (state) => {
    return {
       messageObject: state.messageReducer
    }
  }

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        paddingBottom: "5px"
    },
    inline: {
        display: 'inline',
    },
}));
 
export default connect(mapStateToProps)(Testi)

