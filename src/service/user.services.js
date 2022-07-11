import axios from "axios"

// const baseURL = '/api'
const baseURL = 'http://localhost:3001/api'

// axios.defaults.withCredentials = true

export const registerNewUser = (params, setResponse, setErrors) => {
    axios
    .post(`${baseURL}/register`, params)
    .then(response => setResponse(response.data))
    .catch(error => {
        if(error.message === 'Network Error'){
            setErrors(error.message)
            return
        }
        setErrors(error.response.data)
    })
}

export const loginUser = (params, setResponse, setErrors) => {  
    axios
    .post(`${baseURL}/login`, params,  { withCredentials: true })
    .then(response => setResponse(response.data))
    .catch(error => {
        if(error.message === 'Network Error'){
            setErrors(error.message)
            return
        }
        setErrors(error.response.data)
    })
}

export const logoutUser = () => {
    axios
    .post(`${baseURL}/logout`)
}

export const getUsername = (setUsername) => {
    axios
    .get(`${baseURL}/user`)
    .then(response => setUsername(response.data))
    .catch(err => console.log(err.response.data))
}

export const getUserFavouriteGames = (setFavourite) => {
    axios
    .get(`${baseURL}/user/favourites`,{ withCredentials: true })
    .then(response => setFavourite(response.data))
    .catch(error => console.log(error.response.data))
}

export const addFavouriteGame = (params, setNewGame) => {
    axios
    .post(`${baseURL}/user/favourites/add`, params,{ withCredentials: true })
    .then(response => setNewGame(response.data))
    .catch(err => console.log(err.response.data))
}

export const removeFavouriteGame = (params, setNewGame) => {
    axios
    .post(`${baseURL}/user/favourites/remove`, params,{ withCredentials: true })
    .then(response => setNewGame(response.data))
    .catch(err => console.log(err.response.data))
}