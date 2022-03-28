import "./styles/index.css"
import {useDispatch} from "react-redux";
import {addMyRecipesAction} from "../reducers/myRecipesReducer";
import {useState} from "react";

const Modal = ({active, setActive, recipe}) => {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");
    const calcMyCalories = Math.round(recipe.recipe.calories / recipe.recipe.totalWeight * inputValue)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMyRecipesAction({...recipe, myValues: {myGrams: inputValue, myCals: calcMyCalories}}));
        setActive(false);
        setInputValue("");
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className={active ? "Modal active" : "Modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h4>
                    {recipe.recipe.label}
                </h4>
                <form onSubmit={handleSubmit}>
                    <div className={"form-content"}>
                        <div className={"form-content__block"}>
                            <div>Total weight: {Math.round(recipe.recipe.totalWeight)} g</div>
                            <label>
                                Grams: <input type={"number"} onChange={handleChange} required={true} value={inputValue}/>
                            </label>
                        </div>
                        <div className={"form-content__block calories"}>
                            <div>Calories: {Math.round(recipe.recipe.calories)} cal</div>
                            <div>Your calories: {calcMyCalories} cal</div>
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;