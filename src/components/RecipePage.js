import {useLocation} from "react-router-dom";
import "./styles/RecipePage.css"
import {useState} from "react";
import Modal from "./Modal";

const RecipePage = () => {
    const [modalActive, setModalActive] = useState(false);

    const location = useLocation();
    const {recipe} = location.state;

    return (
        <div className={"RecipePage"}>
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
                        setModalActive(true)
                    }}>+
                    </button>
                    Add to my recipes
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive} recipe={recipe}/>
        </div>)
}

export default RecipePage;