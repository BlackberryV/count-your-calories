import "./styles/App.css"
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import RecipePage from "./RecipePage";
import RecipesPage from "./RecipesPage";
import {getByCuisineType, getByMealType} from "../reducers/asyncActions";
import SearchResults from "./SearchResults";

function App() {
    return (<>
            <Routes>
                <Route path={"/"} element={<Header/>}>
                    <Route path={"/"} element={<SearchResults/>}/> //todo separate component
                    <Route path={"/search"} element={<SearchResults/>}/>
                    <Route path={"/mealType/:mealType"} index element={<RecipesPage getFunc={getByMealType}/>}/>
                    <Route path={"/cuisineType/:cuisineType"} index element={<RecipesPage getFunc={getByCuisineType}/>}/>
                    <Route path={"/recipe/:label"} element={<RecipePage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
