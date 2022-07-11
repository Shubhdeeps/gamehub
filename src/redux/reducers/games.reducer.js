import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    allGames: [],
    games: [],
    tags: [],
    genres: [],
    singleGame: {},
    platform: [], 
    search: [],
    user_favourite: [],
    user_added_games: []
}

export const games = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.SET_ALL_GAMES:
            return {...state, allGames: action.payload}
        case ActionTypes.SET_GAMES:
            return {...state, games: action.payload}
        case ActionTypes.SET_TAGS:
            return {...state, tags: action.payload}
        case ActionTypes.SET_GENRES:
            return {...state, genres: action.payload}
        case ActionTypes.SET_SINGLE_GAME:
            return {...state, singleGame: action.payload}
        case ActionTypes.SET_PLATFORM:
            return {...state, platform:action.payload}
        case ActionTypes.SET_SEARCH_GAMES:
            return {...state, search:action.payload}
        case ActionTypes.SET_USER_ADDED_GAMES:
            return {...state, user_added_games: action.payload}
        case ActionTypes.ADD_USER_FAVOURITE:
            const newId = action.payload.id 
            const filterGames = state.user_favourite.filter(x => x.id !== newId)
            return {...state, user_favourite: filterGames}
        default:
            return state
    }
}
