import { ActionTypes } from "../constants/actionTypes"

export const registerationError = (message) => {
    return{
        type: ActionTypes.FAILED_REGISTERATION,
        payload: message
    }
}