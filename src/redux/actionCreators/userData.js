import { ActionTypes } from "../constants/actionTypes"

export const setUserName = (name) => {
    return{
        type: ActionTypes.SET_USERNAME,
        payload: name
    }
}

export const setUserFavouriteGames = (gameId) => {
    return{
        type: ActionTypes.SET_FAVOURITE_GAMES,
        payload: gameId
    }
}