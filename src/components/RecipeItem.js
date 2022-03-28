import "./styles/index.css"
import {NavLink} from "react-router-dom";
import Modal from "./Modal";
import {useState} from "react";

const RecipeItem = ({recipe}) => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className={"RecipeItem"}>
            <button className={"small-btn"} onClick={() => setModalActive(true)}>+</button>
            <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
            <div>
                <h4>
                    <NavLink
                        to={`/recipe/${recipe.recipe.label}`}
                        state={{recipe: recipe}}>
                        {recipe.recipe.label.length > 40 ?
                            recipe.recipe.label.slice(0, 40) + "..." : recipe.recipe.label}
                    </NavLink>
                </h4>
                <div>Calories: {Math.round(recipe.recipe.calories)} cal</div>
            </div>
            <Modal active={modalActive} setActive={setModalActive} recipe={recipe}/>
        </div>
    )
}

export default RecipeItem;