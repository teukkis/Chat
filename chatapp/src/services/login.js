import axios from 'axios'
const baseUrl = 'http://localhost:2999/api/login'

const login = async (credientials) => {
    const response = await axios.post(baseUrl, credientials)
    return response.data
}

export default {
    login
}