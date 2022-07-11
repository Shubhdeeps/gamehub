import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    username: '',
    favourite_games: []
}

export const users = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.SET_USERNAME: 
            return {...state, username: action.payload}
        case ActionTypes.SET_FAVOURITE_GAMES:
            return {...state, favourite_games: action.payload}
        default:
            return state
    }
}