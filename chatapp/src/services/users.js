import axios from 'axios'
const baseUrl = 'http://localhost:2999/api/users'

const getUsers = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getOneUser = async (user) => {
    const response = await axios.get(`${baseUrl}/${user}`)
    return response.data
}

const updateUser = async (newUserProfile) => {
    const response = await axios.put(`${baseUrl}/${newUserProfile.user}`, newUserProfile)
    return response.data
}

export default {
    getUsers,
    getOneUser,
    updateUser
}