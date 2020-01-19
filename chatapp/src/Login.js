import React, { useState } from 'react'
import { connect } from 'react-redux'

import { login } from './reducers/loginReducer'
import loginService from './services/login'
import messageService from './services/messages'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.scss';
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    spacing: {
        height: '10vh'
    }
  }));

const mapDispatchToProps = {
    login,
}

const Login = (props) => {

    const classes = useStyles();

    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const user = await loginService.login({
                username, password,
            })

            window.localStorage.setItem(
                'loggedUser', JSON.stringify(user)
            )

            messageService.setToken(user.token)
            props.login(username)

        } catch (error) {
            setPassword('')
            window.alert('not found')
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.spacing}></div>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Login</Typography>

            <form onSubmit={handleLogin} className={classes.form} noValidate>

                <TextField 
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="uername"
                    label="Username"
                    name="username"
                    autoFocus 
                    value={username} 
                    onChange={({ target }) => setUsername(target.value)} 
                />

                <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password} 
                    onChange={({ target }) => setPassword(target.value)} 
                />
            
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Login
            </Button>
            </form>

        </div>
      
    </Container>
    )
}


export default connect(null, mapDispatchToProps)(Login)