import "./styles/RecipeItem.css"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addMyRecipesAction} from "../reducers/myRecipesReducer";

const RecipeItem = ({recipe}) => {
    const dispatch = useDispatch();

    return (
        <div className={"RecipeItem"}>
                <button className={"add-btn"} onClick={() => dispatch(addMyRecipesAction(recipe))}>+</button>
                <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
            <div>
                <NavLink
                    to={`/recipe/${recipe.recipe.label}`}
                    state={{recipe: recipe}}
                    className={"label"}>
                    {recipe.recipe.label.length > 40 ?
                        recipe.recipe.label.slice(0, 40) + "..." : recipe.recipe.label}
                </NavLink>
                <div>Calories: {Math.round(recipe.recipe.calories)}</div>
            </div>
        </div>
    )
}

export default RecipeItem;