import CountNormaForm from "./CountNormaForm";
import "./App.css"
import SearchForm from "./SearchForm";

function App() {
    return (
        <div className="App">
            <header className={"header"}>
                <SearchForm className={"SearchForm"}/>
            </header>
            <div className={"content"}>
                <div className={"recipes"}>

                </div>
                <CountNormaForm className={"CountNormaForm"}/>
            </div>
        </div>
    );
}

export default App;
