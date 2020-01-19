import userService from '../services/users'

const profileReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'CHANGE_STATUS':
            return action.data
        case 'CHANGE_LOCATION':
            return action.data
        case 'CHANGE_ICON':
            return action.data
        default: 
            return state
    }
    
}


export const changeStatus = (newUserProfile) => {
    return async dispatch => {
        const userUpdated = await userService.updateUser(newUserProfile)
        dispatch({
            type:'CHANGE_STATUS',
            data: userUpdated
        })
    }
}

export const changeLocation = (user, newLocation) => {
    return async dispatch => {
        const userUpdated = await userService.updateUser(user, newLocation)
        dispatch({
            type:'CHANGE_LOCATION',
            data: userUpdated
        })
    }
}

export const changeIcon = (user, newIcon) => {
    return async dispatch => {
        const userUpdated = await userService.updateUser(user, newIcon)
        dispatch({
            type:'CHANGE_ICON',
            data: userUpdated
        })
    }
}



export default profileReducer;
