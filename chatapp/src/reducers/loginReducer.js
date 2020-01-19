
const initialState = 
    {
    data: {
      logged: false,
      user: '', 
    },
    }

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGGED_IN':
            return{...state, data:{ logged: action.data.logged, user: action.data.user}}
        case 'LOGGED_OUT':
            return{...state, data:{ logged: action.data.logged, user: action.data.user}}
        default:
            return state
    }

}

export const login = (user) => {

    return async dispatch => {
        
        dispatch({
            type: 'LOGGED_IN',
            data: {
                logged: true,
                user: user
            }
        })
    }
}

export const logout = (user) => {
    return async dispatch => {
        dispatch({
            type: 'LOGGED_OUT',
            data: {
                logged: false,
                user: user
            }
        })
    }
}



export default loginReducer