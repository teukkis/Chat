import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import Chat from './Chat'
import { login } from './reducers/loginReducer'
import Login from './Login'
import { Route, withRouter } from 'react-router-dom'
import './style.scss';


const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer
  }
}

const mapDispatchToProps = {
    login,
}
  
const App = (props) => {

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      props.login(user.username)
      props.history.push(`/chat/${user.username}`)
    }

    else {
      props.history.push('/login')
    }

  }, [props.loginReducer.data.logged])

  return (
        <div>
          <div>
          <Route path="/chat/:username" component={Chat} />
          <Route path="/login" component={ Login} />
          </div>
        </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)) ;
