import "./styles/index.css"
// import "./styles/media.css"
import Layout from "./Layout";
import {Route, Routes} from "react-router-dom";
import RecipePage from "./RecipePage";
import RecipesPage from "./RecipesPage";
import {getByCuisineType, getByMealType} from "../reducers/asyncActions";
import SearchResults from "./SearchResults";
import IndexPage from "./IndexPage";
import NotFoundPage from "./NotFoundPage";
import CountNormaForm from "./CountNormaForm";
import MyRecipes from "./MyRecipes";

function App() {
    return (<>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/"} element={<IndexPage/>}/>
                    <Route path={"/search"} element={<SearchResults/>}/>
                    <Route path={"/mealType/:mealType"} index element={<RecipesPage getFunc={getByMealType}/>}/>
                    <Route path={"/cuisineType/:cuisineType"} index element={<RecipesPage getFunc={getByCuisineType}/>}/>
                    <Route path={"/recipe/:label"} element={<RecipePage/>}/>
                    <Route path={"/myRecipes"} element={<div className={"my-recipes-mobile"}><CountNormaForm/><MyRecipes/></div>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
