import CountNormaForm from "./CountNormaForm";
import "./App.css"
import Header from "./Header";
import RecipesPage from "./RecipesPage";

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
