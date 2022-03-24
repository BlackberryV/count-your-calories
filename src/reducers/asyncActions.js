import {ACCESS_POINT, API_KEY} from "../constants";
import {filterRecipesAction, searchRecipesAction} from "./recipesReducer";

export const getIndexPage = () => {   //todo need to be called
    return dispatch => {
        fetch(`${ACCESS_POINT}&q=best%20recipes&${API_KEY}`)
            .then(r => r.json())
            .then(json => dispatch(filterRecipesAction(json)))
    }
}

export const searchRecipes = (q) => {
    return dispatch => {
        fetch(`${ACCESS_POINT}&q=${q}&${API_KEY}`)
            .then(r => r.json())
            .then(json => dispatch(searchRecipesAction(json)))
    }
}

export const getByMealType = (mealType) => {
    return dispatch => {
        fetch(`${ACCESS_POINT}&${API_KEY}&mealType=${mealType}`)
            .then(r => r.json())
            .then(json => dispatch(filterRecipesAction(json)))
    }
}

export const getByCuisineType = (cuisineType) => {
    return dispatch => {
        fetch(`${ACCESS_POINT}&${API_KEY}&cuisineType=${cuisineType}`)
            .then(r => r.json())
            .then(json => dispatch(filterRecipesAction(json)))
    }
}