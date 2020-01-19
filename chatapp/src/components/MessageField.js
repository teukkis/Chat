import React from 'react';
import {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



const MessageField = ({onSendMessage: pushSendMessage}) => {

    const classes = useStyles();
    const [message, setMessage] = useState('');

    const handleMessage = (event) => {
        setMessage(event.target.value);
    }

    const sendMessage = (event) => {
        event.preventDefault();
        pushSendMessage(message)
        setMessage('')
    }

    return (

        <div className={classes.root}>
            <form onSubmit={sendMessage} className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={1}>
                    <Grid item xl={9}>
                        <TextField
                            id="messageField"
                            label="Type message..."
                            value={message} 
                            onChange={handleMessage}
                            variant="outlined"
                            rows="1"
                            rowsMax="2"
                            multiline
                        />
                    </Grid>

                    <Grid item xl={2}>
                        <Button
                            size="medium" 
                            type="submit" 
                            className={classes.margin}
                            variant="outlined"
                            color="primary">
                            Send
                        </Button>
                    </Grid>
            
                </Grid>
            </form>
     </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(0),
        width: '90%',
        
      },
    },
    margin: {
        margin: theme.spacing(1),
      },
  }));
  

export default MessageField;
