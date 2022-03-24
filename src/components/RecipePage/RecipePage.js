import {useLocation} from "react-router-dom";
import "./RecipePage.css"

const RecipePage = () => {
    const location = useLocation();
    const {recipe} = location.state
    return <div className={"RecipePage"}>
        <div className={"label"}>{recipe.recipe.label}</div>
        <div className={"info-container"}>
            <img src={recipe.recipe.images.REGULAR.url} alt={"/"}/>
            <ul>
                {recipe.recipe.ingredientLines.map(e => <li>{e}</li>)}
                <div>
                    <a href={recipe.recipe.url} target={"_blank"}>If you want to cook this
                        recipe, than click here</a>
                </div>
            </ul>
            <div className={"characteristics"}>
                <div><span>Total time: </span>{recipe.recipe.totalTime}</div>
                <div><span>Total weight: </span>{Math.round(recipe.recipe.totalWeight)}</div>
                <div><span>Calories: </span>{Math.round(recipe.recipe.calories)}</div>
            </div>
        </div>
    </div>
}

export default RecipePage;