import "./RecipeItem.css"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

const RecipeItem = ({recipe}) => {
    // const dispatch = useDispatch(); //todo button for adding to my recipes array
    return (
        <div className={"RecipeItem"}>
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