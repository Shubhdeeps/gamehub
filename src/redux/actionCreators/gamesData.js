import axios from "axios"
import { ActionTypes } from "../constants/actionTypes"

const key = 'a18f7af66a754a88853ab3857b5f3e95'

export const setSearchGames = (param) => {
    const baseURL = `https://api.rawg.io/api/games?key=${key}&page_size=7&search=${param}`
    
    return async (dispatch, getState) => {
        await axios.get(baseURL)
        .then(response => {
            dispatch({
                type: ActionTypes.SET_SEARCH_GAMES,
                payload: response.data
            })
            // dispatch(setFetchError(''))
        })
       .catch((error) => 
       console.log(error.message)
    //    dispatch(setFetchError(error.message))
       )
    }
}


export const setGames = (param, page = 1) => {
    const baseURL = `https://api.rawg.io/api/games?key=${key}&page=${page}`
    
    return async (dispatch, getState) => {
        await axios.get(baseURL)
        .then(response => {
            dispatch({
                type: ActionTypes.SET_GAMES,
                payload: response.data
            })
            // dispatch(setFetchError(''))
        })
       .catch((error) => 
       console.log(error.message)
    //    dispatch(setFetchError(error.message))
       )
    }
}

export const setTagGames = (param, page = 1) => {
    const baseURL = `https://api.rawg.io/api/games?key=${key}&tags=${param}&page=${page}`
    
    return async (dispatch, getState) => {
        await axios.get(baseURL)
        .then(response => {
            dispatch({
                type: ActionTypes.SET_GAMES,
                payload: response.data
            })
            // dispatch(setFetchError(''))
        })
       .catch((error) => 
       console.log(error.message)
    //    dispatch(setFetchError(error.message))
       )
    }
}

export const setGenreGames = (param, page = 1) => {
    const baseURL = `https://api.rawg.io/api/games?key=${key}&genres=${param}&page=${page}`
    
    return async (dispatch, getState) => {
        await axios.get(baseURL)
        .then(response => {
            dispatch({
                type: ActionTypes.SET_GAMES,
                payload: response.data
            })
            // dispatch(setFetchError(''))
        })
       .catch((error) => 
       console.log(error.message)
    //    dispatch(setFetchError(error.message))
       )
    }
}

export const setAllGames = (page = 1, page_size = 8) => {
    const baseURL = `https://api.rawg.io/api/games?key=${key}&page_size=${page_size}&page=${page}`
    
    return async (dispatch, getState) => {
        await axios.get(baseURL)
        .then(response => {
            dispatch({
                type: ActionTypes.SET_ALL_GAMES,
                payload: response.data
            })
            // dispatch(setFetchError(''))
        })
       .catch((error) => 
       console.log(error.message)
    //    dispatch(setFetchError(error.message))
       )
    }
}

export const fetchGame = (id) => {
    const baseURL = `https://api.rawg.io/api/games/${id}?key=${key}`
    
    return async (dispatch, getState) => {
        await axios.get(baseURL)
        .then(response => {
            dispatch({
                type: ActionTypes.SET_SINGLE_GAME,
                payload: response.data
            })
            // dispatch(setFetchError(''))
        })
       .catch((error) => 
       console.log(error.message)
    //    dispatch(setFetchError(error.message))
       )
    }
}

export const setTags = (page = 1) => {
    const baseURL = `https://api.rawg.io/api/tags?key=${key}&page=${page}`
    
    return async (dispatch, getState) => {
        await axios.get(baseURL)
        .then(response => {
            dispatch({
                type: ActionTypes.SET_TAGS,
                payload: response.data
            })
            // dispatch(setFetchError(''))
        })
       .catch((error) => 
       console.log(error.message)
    //    dispatch(setFetchError(error.message))
       )
    }
}


export const setGenres = () => {
    const baseURL = `https://api.rawg.io/api/genres?key=${key}`
    
    return async (dispatch, getState) => {
        await axios.get(baseURL)
        .then(response => {
            dispatch({
                type: ActionTypes.SET_GENRES,
                payload: response.data
            })
            // dispatch(setFetchError(''))
        })
       .catch((error) => 
       console.log(error.message)
    //    dispatch(setFetchError(error.message))
       )
    }
}


export const setPlatform = (platformNumber, page = 1) => {
    const baseURL = `https://api.rawg.io/api/games?key=${key}&parent_platforms=${platformNumber}&page=${page}`
    
    return async (dispatch, getState) => {
        await axios.get(baseURL)
        .then(response => {
            dispatch({
                type: ActionTypes.SET_PLATFORM,
                payload: response.data
            })
            // dispatch(setFetchError(''))
        })
       .catch((error) => 
       console.log(error.message)
    //    dispatch(setFetchError(error.message))
       )
    }
}

export const setUserFavourites = (game) => {
    return{
        type: ActionTypes.ADD_USER_FAVOURITE,
        payload: game
    }
}

export const setUserAddedGames = (games) => {
    return{
        type: ActionTypes.SET_USER_ADDED_GAMES,
        payload: games
    }
}