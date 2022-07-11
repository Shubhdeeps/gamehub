import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    registerationMessage: ''
}

export const alerts = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.FAILED_REGISTERATION:
            return {...state, registerationMessage: action.payload}
        default: 
            return state
    }
}