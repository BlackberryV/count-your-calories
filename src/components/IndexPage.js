import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import RecipeItem from "./RecipeItem";
import {getIndexPage} from "../reducers/asyncActions";

const IndexPage = () => {
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipesReducer.recipes);

    useEffect(() => {
        dispatch(getIndexPage())
    }, [])

    return (
        <div className={"RecipesPage"}>
            {recipes.length ?
                recipes.map(recipe => <RecipeItem key={recipe.recipe.uri} recipe={recipe}/>)
                : <div>Sorry, we do not have such recipes, try to find something else.</div>}
        </div>
    )
}

export default IndexPage;