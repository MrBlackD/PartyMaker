import { actionTypes } from "../constants/actionTypes";

export default (state = null,action)=>{
    const {type, payload} = action;
    switch(type){
        case actionTypes.AUTH:
            return payload;
        default:
            return state;
    }
}