import {useSelector} from "react-redux";
import "./styles/MyRecipes.css"
import {NavLink} from "react-router-dom";

const MyRecipes = () => {
    const myRecipes = useSelector(state => state.myRecipesReducer.myRecipes);
    return (
        <div className={"MyRecipes"}>
            <h3>My Recipes</h3>
            {myRecipes.map(e =>
                <div>
                    <NavLink
                        to={`/recipe/${e.recipe.label}`}
                        state={{recipe: e}}
                        className={"title"}
                    >{e.recipe.label}</NavLink>
                    <div>{Math.round(e.recipe.calories)} calories</div>
                </div>)}
        </div>
    )
}

export default MyRecipes;