import messageService from '../services/messages'

const messageReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'INIT_MESSAGES':
            return action.data
        default: 
            return state
    }
    
}

export const initMessages = () => {
    return async dispatch => {
        const messages = await messageService.getAll()
        dispatch({
            type:'INIT_MESSAGES',
            data: messages
        })
    }
}


export default messageReducer;
