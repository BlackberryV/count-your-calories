import {useDispatch, useSelector} from "react-redux";
import RecipeItem from "./RecipeItem";
import "./styles/RecipesPage.css"
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const RecipesPage = ({getFunc}) => {
    const dispatcher = useDispatch();
    const location = useLocation()
    const recipes = useSelector(state => state.recipesReducer.recipes);

    useEffect(() => {
            dispatcher(getFunc(location.state.filter))
    }, [location.state.filter])

    return (
        <div className={"RecipesPage"}>
            {recipes.length ?
                recipes.map(recipe => <RecipeItem key={recipe.recipe.uri} recipe={recipe}/>)
                : <div>Sorry, we do not have such recipes, try to find something else.</div>}
        </div>
    )
}

export default RecipesPage;