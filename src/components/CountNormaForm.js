import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {countCaloriesNormaAction, resetCaloriesNormaAction} from "../reducers/yourNormaReducer";
import "./styles/CountNormaForm.css"
import {useForm} from "react-hook-form";

const CountNormaForm = () => {

    const dispatch = useDispatch();
    const yourNorma = useSelector(state => state.yourNormaReducer.calories);

    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
    } = useForm();

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("male");

    const onSubmit = () => {
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
                <form onSubmit={handleSubmit(onSubmit)} className={"CountNormaForm"}>
                    <h3>Count your calories norma</h3>
                    <label>Weight in kg
                        <input
                            {...register("weight", {
                                required: true,
                                value: weight,
                                onChange: e => setWeight(e.target.value)
                            })}
                            type={"number"}
                        />
                        {errors?.weight ? <span className={"error-message"}>Required field!</span> : ""}

                    </label>
                    <label>Height in cm
                        <input
                            {...register("height", {
                                required: true,
                                value: height,
                                onChange: e => setHeight(e.target.value)
                            })}
                            type={"number"}
                        />
                        {errors?.height ? <span className={"error-message"}>Required field!</span> : ""}
                    </label>
                    <label>Age in years
                        <input
                            {...register("age", {
                                required: true,
                                value: age,
                                onChange: e => setAge(e.target.value)
                            })}
                            type={"number"}
                        />
                        {errors?.age ? <span className={"error-message"}>Required field!</span> : ""}
                    </label>
                    <div className={"radio"}>
                        <div>
                            <label>Female</label>
                            <input className={"radio"} type={"radio"}
                                   {...register("sex", {
                                       required: true,
                                       value: "female",
                                       onChange: e => setSex(e.target.value)
                                   })}
                            />
                        </div>
                        <div>
                            <label>Male</label>
                            <input className={"radio"} type={"radio"}
                                   {...register("sex", {
                                       required: true,
                                       value: "male",
                                       onChange: e => setSex(e.target.value)
                                   })}
                            />
                        </div>
                    </div>
                    {errors?.sex ? <span className={"error-message"}>Required field!</span> : ""}
                    <button onClick={handleSubmit(onSubmit)} type={"submit"}>Count!</button>
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