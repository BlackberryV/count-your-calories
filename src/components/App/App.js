import "./App.css"
import Header from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import RecipePage from "../RecipePage/RecipePage";
import RecipesPage from "../RecipesPage/RecipesPage";

function App() {
    return (<>
            <Routes>
                <Route path={"/"} element={<Header/>}>
                    <Route path={"/"} index element={<RecipesPage/>}/>
                    <Route path={"/recipe/:label"} element={<RecipePage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
