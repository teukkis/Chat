
const newMessageReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'NEW_MESSAGE':
            return [...state, action.data]
        default: 
            return state
    }
    
}


export const newMessage = (message, currentUser) => {
    return async dispatch => {
        dispatch({
            type:'NEW_MESSAGE',
            data: {
                message: message,
                user: currentUser
            }
        })
    }
}

export default newMessageReducer;
