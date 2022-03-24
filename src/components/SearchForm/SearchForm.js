import {useState} from "react";
import {useDispatch} from "react-redux";
import {searchRecipes} from "../../reducers/asyncActions";
import "./SearchForm.css"

const SearchForm = () => {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === "") return
        dispatch(searchRecipes(inputValue))
        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit} className={"SearchForm"}>
            <input value={inputValue}
                   onChange={e => setInputValue(e.target.value)}/>
            <button onClick={handleSubmit}>Search!</button>
        </form>
    )
}

export default SearchForm;