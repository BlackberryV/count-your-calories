import {useSelector} from "react-redux";
import RecipeItem from "../RecipeItem/RecipeItem";
import "./RecipesPage.css"

const RecipesPage = () => {
    const recipes = useSelector(state => state.recipesReducer.recipes);
    return (
        <div className={"RecipesPage"}>
            {recipes.map(recipe => <RecipeItem key={recipe.recipe.uri} recipe={recipe}/>)}
        </div>
    )
}

export default RecipesPage;