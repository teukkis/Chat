import userService from '../services/users'

const currentUserReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'GET_CURRENT_USER':
            return action.data
        default: 
            return state
    }
    
}


export const getCurrentUser = (user) => {
    return async dispatch => {
        const currentUser = await userService.getOneUser(user)
        dispatch({
            type:'GET_CURRENT_USER',
            data: currentUser
        })
    }
}


export default currentUserReducer;
