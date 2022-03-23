import CountNormaForm from "./CountNormaForm";
import "./App.css"
import Header from "./Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={"content"}>
                <div className={"recipes"}>

                </div>
                <CountNormaForm className={"CountNormaForm"}/>
            </div>
        </div>
    );
}

export default App;
