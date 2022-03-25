import {ADD_MY_RECIPE} from "../constants";

const defaultState = {
    myRecipes: []
}

export const myRecipesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MY_RECIPE:
            return {myRecipes: [...state.myRecipes, action.payload]};
        default:
            return state;
    }
}

export const addMyRecipesAction = (payload) => ({type: ADD_MY_RECIPE, payload})