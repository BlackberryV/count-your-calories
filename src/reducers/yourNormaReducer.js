import {COUNT_CALORIES_NORMA, RESET_CALORIES_NORMA} from "../constants";

const defaultState = {
    calories: 0
}

export const yourNormaReducer = (state = defaultState, action) => {
    switch (action.type) {
        case COUNT_CALORIES_NORMA:
            return {
                ...state,
                calories: action.payload.sex === "male" ?
                    88.36 + (13.4 * action.payload.weight) + (4.8 * action.payload.height) - (5.7 * action.payload.age)
                    :
                    447.6 + (9.2 * action.payload.weight) + (3.1 * action.payload.height) - (4.3 * action.payload.age)
            }
        case RESET_CALORIES_NORMA:
            return {...state, calories: 0}
        default:
            return state
    }
}

export const countCaloriesNormaAction = (payload) => ({type: COUNT_CALORIES_NORMA, payload})
export const resetCaloriesNormaAction = (payload) => ({type: RESET_CALORIES_NORMA, payload})