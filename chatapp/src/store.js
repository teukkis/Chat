import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import messageReducer  from './reducers/messageReducer'
import loginReducer from './reducers/loginReducer'
import newMessageReducer from './reducers/newMessageReducer'
import userReducer from './reducers/userReducer'
import profileReducer from './reducers/profileReducer'
import currentUserReducer from './reducers/currentUserReducer'

const allReducers = combineReducers({
    messageReducer: messageReducer,
    loginReducer: loginReducer,
    newMessageReducer: newMessageReducer,
    userReducer: userReducer,
    profileReducer: profileReducer,
    currentUserReducer: currentUserReducer,
})

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store

