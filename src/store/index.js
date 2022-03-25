import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {yourNormaReducer} from "../reducers/yourNormaReducer";
import thunk from "redux-thunk";
import {recipesReducer} from "../reducers/recipesReducer";
import {myRecipesReducer} from "../reducers/myRecipesReducer";

const rootReducer = combineReducers({
    yourNormaReducer,
    recipesReducer,
    myRecipesReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))