import {useDispatch} from "react-redux";
import {useState} from "react";
import {countCaloriesNormaAction} from "../reducers/yourNormaReducer";

const CountNormaForm = () => {

    const dispatch = useDispatch();

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [age, setAge] = useState(0);
    const [sex, setSex] = useState("male");

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(countCaloriesNormaAction({
            sex: sex,
            weight: weight,
            height: height,
            age: age
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Female</label>
            <input type={"radio"} name={"sex"} value={"female"} onChange={e => setSex(e.target.value)}/>
            <label>Male</label>
            <input type={"radio"} name={"sex"} value={"male"} onChange={e => setSex(e.target.value)}/>

            <label>Weight in kg</label>
            <input
                value={weight}
                onChange={e => setWeight(e.target.value)}
                type={"number"}/>

            <label>Height in cm</label>
            <input
                value={height}
                onChange={e => setHeight(e.target.value)}
                type={"number"}/>

            <label>Age in years</label>
            <input
                value={age}
                onChange={e => setAge(e.target.value)}
                type={"number"}/>
            <button onClick={handleSubmit}>Count your norma!</button>
        </form>
    )
}

export default CountNormaForm;