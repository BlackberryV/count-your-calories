import CountNormaForm from "../CountNormaForm/CountNormaForm";
import "./App.css"
import Header from "../Header/Header";
import RecipesPage from "../RecipesPage/RecipesPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={"content"}>
                <RecipesPage className={"RecipesPage"}/>
                <CountNormaForm className={"CountNormaForm"}/>
            </div>
        </div>
    );
}

export default App;
