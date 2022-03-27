import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {countCaloriesNormaAction, resetCaloriesNormaAction} from "../reducers/yourNormaReducer";
import "./styles/CountNormaForm.css"

const CountNormaForm = () => {

    const dispatch = useDispatch();
    const yourNorma = useSelector(state => state.yourNormaReducer.calories);

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!sex || !weight || !age || !height) {
            if (!sex) document.getElementById("sex").classList.add("empty-radio")
            if (!height) document.getElementById("height").classList.add("wrong-input");
            if (!age) document.getElementById("age").classList.add("wrong-input");
            if (!weight) document.getElementById("weight").classList.add("wrong-input");
            return
        }
        document.getElementById("height").classList.remove("wrong-input");
        document.getElementById("age").classList.remove("wrong-input");
        document.getElementById("weight").classList.remove("wrong-input");
        document.getElementById("sex").classList.remove("empty-radio")

        dispatch(countCaloriesNormaAction({
            sex: sex,
            weight: weight,
            height: height,
            age: age
        }))
    }

    return (
        <>
            {!yourNorma ?
                <form onSubmit={handleSubmit} className={"CountNormaForm"}>
                    <h3>Count your calories norma</h3>
                    <label>Weight in kg
                        <input
                            value={weight}
                            onChange={e => setWeight(e.target.value)}
                            type={"number"} id={"weight"}/>
                    </label>
                    <label>Height in cm
                        <input
                            value={height}
                            onChange={e => setHeight(e.target.value)}
                            type={"number"} id={"height"}/>
                    </label>
                    <label>Age in years
                        <input
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            type={"number"} id={"age"}/>
                    </label>
                    <div className={"radio"} id={"sex"}>
                        <div>
                            <label>Female</label>
                            <input className={"radio"} type={"radio"} name={"sex"} value={"female"}
                                   onChange={e => setSex(e.target.value)}/>
                        </div>
                        <div>
                            <label>Male</label>
                            <input className={"radio"} type={"radio"} name={"sex"} value={"male"}
                                   onChange={e => setSex(e.target.value)}/>
                        </div>
                    </div>
                    <button onClick={handleSubmit} type={"submit"}>Count!</button>
                </form>
                :
                <div className={"CountNormaForm"}>
                    <div className={"count-results"}>Your norma: {Math.round(yourNorma)} cal</div>
                    <button onClick={() => dispatch(resetCaloriesNormaAction())}>Calculate one more time</button>
                </div>
            }
        </>
    )
}

export default CountNormaForm;