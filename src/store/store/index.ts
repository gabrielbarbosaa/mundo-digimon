import { createStore, combineReducers } from "redux";
import { reducer } from "../reducers";

const Reducer = combineReducers({
    clickState: reducer
})

export const Store = createStore(Reducer)