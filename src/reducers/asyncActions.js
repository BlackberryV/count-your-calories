import {ACCESS_POINT, API_KEY} from "../constants";
import {searchRecipesAction} from "./recipesReducer";

export const searchRecipes = (q) => {
    return dispatch => {
        fetch(`${ACCESS_POINT}&q=${q}&${API_KEY}`)
            .then(r => r.json())
            .then(json => dispatch(searchRecipesAction(json)))
    }
}