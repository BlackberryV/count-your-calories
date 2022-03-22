import {useSelector} from "react-redux";
import CountNormaForm from "./CountNormaForm";

function App() {
    const yourNorma = useSelector(state => state.yourNorma.calories);

    return (
        <div className="App">
            <CountNormaForm />
            {yourNorma}
        </div>
    );
}

export default App;
