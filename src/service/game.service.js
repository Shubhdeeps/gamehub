import axios from "axios"

// const baseURL = '/api'
const baseURL = 'http://localhost:3001/api'


export const getAllGames = (setGames) => {
    axios
    .get(`${baseURL}/games`)
    .then(response => setGames(response.data))
    .catch(err => console.log(err.message))
}

export const postNewGame = (params) => {
    axios
    .post(`${baseURL}/create`, params, { withCredentials: true })
    .then(response => console.log(response))
    .catch(err => console.log(err))
}

export const fetchFavouriteGame = (id, setGame ) => {
    const key = 'a18f7af66a754a88853ab3857b5f3e95'
    const URL = `https://api.rawg.io/api/games/${id}?key=${key}`
    if(typeof(id) === Number){
        axios.get(URL)
        .then(response => setGame(response.data))
        .catch((error) => console.log(error.message))
    }
}