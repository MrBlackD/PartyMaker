import {actionTypes} from "../constants/actionTypes"

export function auth(authToken){
    return {
        type:actionTypes.AUTH,
        payload:authToken
    }
}