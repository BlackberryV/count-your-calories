import {useDispatch, useSelector} from "react-redux";
import "./styles/index.css"
import {NavLink} from "react-router-dom";
import {removeMyRecipesAction} from "../reducers/myRecipesReducer";

const MyRecipes = () => {
    const dispatch = useDispatch();
    const myRecipes = useSelector(state => state.myRecipesReducer.myRecipes);
    return (
        <div className={"MyRecipes"}>
            <h3>My Ration</h3>
            {!myRecipes.length ?
                <div>Now your recipe list is empty, press plus button near any recipe you liked to add</div> : ""}
            {myRecipes.map(e =>
                <div key={e.recipe.label} className={"recipe-container"}>
                    <div>
                        <h4>
                            <NavLink
                                to={`/recipe/${e.recipe.label}`}
                                state={{recipe: e}}
                            >{e.recipe.label}</NavLink>
                        </h4>
                        <div>{e.myValues.myCals} calories</div>
                        <div>{e.myValues.myGrams} grams</div>
                    </div>
                    <button
                        onClick={() => dispatch(removeMyRecipesAction(e.recipe.label))}
                        className={"small-btn"}>x
                    </button>
                </div>)}
            <div className={"calories-sum"}>
                {myRecipes.length ? myRecipes.reduce((a, e) => a + e.myValues.myCals, 0) + " cal" : ""}
            </div>
        </div>
    )
}

export default MyRecipes;