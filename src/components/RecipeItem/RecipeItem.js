import "./RecipeItem.css"
import {NavLink} from "react-router-dom";

const RecipeItem = ({recipe}) => {
    return (
        <div className={"RecipeItem"}>
            <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
            <div>
                <NavLink
                    to={`/recipe/${recipe.recipe.label}`}
                    state={{recipe: recipe}}
                    className={"label"}>
                    {recipe.recipe.label.length > 45 ?
                    recipe.recipe.label.slice(0, 46) + "..." : recipe.recipe.label}
                </NavLink>
                <div>Calories: {Math.round(recipe.recipe.calories)}</div>
            </div>
        </div>
    )
}

export default RecipeItem;