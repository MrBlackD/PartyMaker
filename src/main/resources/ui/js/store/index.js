import {createStore, combineReducers} from "redux";

const testReducer = (state = 0,action) => {
    return state;
}

const reducers = combineReducers({
    testReducer
})

export default createStore(reducers);