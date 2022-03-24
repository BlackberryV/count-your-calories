import {useSelector} from "react-redux";
import RecipeItem from "../RecipeItem/RecipeItem";
import "./RecipesPage.css"

const RecipesPage = () => {
    const recipes = useSelector(state => state.recipesReducer.recipes);
    return (
        <div className={"RecipesPage"}>
            {recipes.length ?
                recipes.map(recipe => <RecipeItem key={recipe.recipe.uri} recipe={recipe}/>)
                : <div>Sorry, we do not have such recipes, try to find something else.</div>}
        </div>
    )
}

export default RecipesPage;