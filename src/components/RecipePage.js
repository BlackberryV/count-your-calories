import {useLocation} from "react-router-dom";
import "./styles/RecipePage.css"
import {useDispatch} from "react-redux";
import {addMyRecipesAction} from "../reducers/myRecipesReducer";

const RecipePage = () => {
    const location = useLocation();
    const {recipe} = location.state

    const dispatch = useDispatch();

    return <div className={"RecipePage"}>
        <div className={"label"}>{recipe.recipe.label}</div>
        <div className={"info-container"}>
            <img src={recipe.recipe.images.REGULAR.url} alt={"/"}/>
            <ul>
                {recipe.recipe.ingredientLines.map(e => <li key={Math.random().toFixed(8)}>{e}</li>)}
                <div>
                    <a href={recipe.recipe.url} target={"_blank"}>If you want to cook this
                        recipe, than click here</a>
                </div>
            </ul>
            <div className={"characteristics"}>
                <div><span>Total time: </span>{recipe.recipe.totalTime} m</div>
                <div><span>Total weight: </span>{Math.round(recipe.recipe.totalWeight)} g</div>
                <div><span>Calories: </span>{Math.round(recipe.recipe.calories)} cal</div>
                <button className={"small-btn"} onClick={() => {
                    dispatch(addMyRecipesAction(recipe))
                }}>+
                </button> Add to my recipes
            </div>
        </div>
    </div>
}

export default RecipePage;