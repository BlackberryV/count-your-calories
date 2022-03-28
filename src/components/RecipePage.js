import {useLocation} from "react-router-dom";
// import "./styles/index.css"
import "./styles/media.css"
import {useState} from "react";
import Modal from "./Modal";

const RecipePage = () => {
    const [modalActive, setModalActive] = useState(false);

    const location = useLocation();
    const {recipe} = location.state;

    return (
        <div className={"RecipePage"}>
            <h4>{recipe.recipe.label}</h4>
            <div className={"info-container"}>
                <div className={"info-container_img"}>
                    <img src={recipe.recipe.images.REGULAR.url} alt={"/"}/>
                </div>
                <div className={"characteristics"}>
                    <div><span>Total time: </span>{recipe.recipe.totalTime} m</div>
                    <div><span>Total weight: </span>{Math.round(recipe.recipe.totalWeight)} g</div>
                    <div><span>Calories: </span>{Math.round(recipe.recipe.calories)} cal</div>
                    <div>
                        <button className={"small-btn"} onClick={() => {
                            setModalActive(true)
                        }}>+
                        </button> Add to my recipes
                    </div>
                </div>
                <ul>
                    {recipe.recipe.ingredientLines.map(e => <li key={Math.random().toFixed(8)}>{e}</li>)}
                    <div>
                        <a href={recipe.recipe.url} target={"_blank"}>If you want to cook this
                            recipe, than click here</a>
                    </div>
                </ul>
            </div>
            <Modal active={modalActive} setActive={setModalActive} recipe={recipe}/>
        </div>)
}

export default RecipePage;