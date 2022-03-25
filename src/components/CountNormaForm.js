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
            return
        }
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
                    <div className={"radio"}>
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
                    <button onClick={handleSubmit} type={"submit"}>Count your norma!</button>
                </form>
                :
                <div className={"CountNormaForm"}>
                    <div className={"count-results"}>Your results: {Math.round(yourNorma)}</div>
                    <button onClick={() => dispatch(resetCaloriesNormaAction())}>Calculate one more time</button>
                </div>
            }
        </>
    )
}

export default CountNormaForm;