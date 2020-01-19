import axios from 'axios'

const baseUrl = 'http://localhost:2999/api/messages'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async newObject => {
    const config = {
        headers: {Authorization: token},
    }
    
    await axios.post(baseUrl, newObject, config)
}


export default { getAll, create, setToken }