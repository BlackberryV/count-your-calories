import {ADD_MY_RECIPE} from "../constants";

const defaultState = {
    myRecipes: []
}

export const myRecipesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MY_RECIPE:
            const filtered = state.myRecipes.filter(e => e.recipe.label === action.payload.recipe.label).length
            return filtered === 0 ? {...state, myRecipes: [...state.myRecipes, action.payload]} : state;
        default:
            return state;
    }
}

export const addMyRecipesAction = (payload) => ({type: ADD_MY_RECIPE, payload})