import "./App.css"
import Header from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import RecipePage from "../RecipePage/RecipePage";
import RecipesPage from "../RecipesPage/RecipesPage";
import {getByCuisineType, getByMealType} from "../../reducers/asyncActions";
import SearchResults from "../SearchRecults/SearchResults";

function App() {
    return (<>
            <Routes>
                <Route path={"/"} element={<Header/>}>
                    {/*<Route path={"/"} element={<RecipesPage/>}/>*/}
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
