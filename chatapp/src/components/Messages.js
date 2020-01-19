import React from 'react';
import { connect } from 'react-redux';

import MessageField from './MessageField';
import PostedMessages from './postedMessges';
import useChat from '../_useChat';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = (state) => {
    return {
        loginReducer: state.loginReducer
      }
}

const Messages = (props) => {

    const classes = useStyles();
    const {messages, sendMessage} = useChat(props.loginReducer.data.user);

    return (

        <div className={classes.root}>
            <Grid  container spacing={3}>

                <Grid className="allMessages" item xs={12}>
                    <Paper className={classes.messages}>
                        <PostedMessages messages={messages} user={props.loginReducer.data.user}/>
                    </Paper>
                </Grid>

                <Grid item xs={12} xl={12}>
                    <Paper className={classes.messageField}>
                        <MessageField onSendMessage={message => {
                            sendMessage({message})
                        }} />
                    </Paper>
                </Grid>
            
            </Grid>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      height: '80vh'
    },
    messages: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    messageField: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: "100%",
    }

  }));


export default connect(mapStateToProps)(Messages);