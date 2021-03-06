import {FILTER_RECIPES, SEARCH_RECIPES} from "../constants";

const defaultState = {
    recipes: [],
    nextPage: {}
}

export const recipesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_RECIPES:
            return {...state, recipes: action.payload.hits, nextPage: action.payload._links.next}
        case FILTER_RECIPES:
            return {...state, recipes: action.payload.hits, nextPage: action.payload._links.next}
        default:
            return state;
    }
}

export const searchRecipesAction = (payload) => ({type: SEARCH_RECIPES, payload})
export const filterRecipesAction = (payload) => ({type: FILTER_RECIPES, payload})