import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {yourNormaReducer} from "../reducers/yourNormaReducer";

const rootReducer = combineReducers({
    yourNorma: yourNormaReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())