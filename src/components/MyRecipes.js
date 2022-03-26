import {useDispatch, useSelector} from "react-redux";
import "./styles/MyRecipes.css"
import {NavLink} from "react-router-dom";
import {removeMyRecipesAction} from "../reducers/myRecipesReducer";

const MyRecipes = () => {
    const dispatch = useDispatch();
    const myRecipes = useSelector(state => state.myRecipesReducer.myRecipes);
    return (
        <div className={"MyRecipes"}>
            <h3>My Recipes</h3>
            {!myRecipes.length ?
                <div>Now your recipe list is empty, press plus button near any recipe you liked to add</div> : ""}
            {myRecipes.map(e =>
                <div key={e.recipe.label} className={"recipe-container"}>
                    <div>
                        <NavLink
                            to={`/recipe/${e.recipe.label}`}
                            state={{recipe: e}}
                            className={"title"}
                        >{e.recipe.label}</NavLink>
                        <div>{Math.round(e.recipe.calories)} calories</div>
                    </div>
                    <button
                        onClick={() => dispatch(removeMyRecipesAction(e.recipe.label))}
                        className={"small-btn"}>x
                    </button>
                </div>)}
        </div>
    )
}

export default MyRecipes;