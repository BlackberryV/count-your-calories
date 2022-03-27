import SearchForm from "./SearchForm";
import "./styles/Layout.css"
import {NavLink, Outlet} from "react-router-dom"
import CountNormaForm from "./CountNormaForm";
import MyRecipes from "./MyRecipes";

const Layout = () => {
    return (
        <>
            <div className="App">
                <header className={"Header"}>
                    <nav>
                        <NavLink to={"/"}>
                            <div className={"icon"}/>
                        </NavLink>
                        <div className={"dropdown"}>
                            <button>Meal Type</button>
                            <div className={"dropdown-content"}>
                                <NavLink to={"/mealType/dinner"} state={{filter: "Dinner"}}>Dinner</NavLink>
                                <NavLink to={"/mealType/lunch"} state={{filter: "Lunch"}}>Lunch</NavLink>
                                <NavLink to={"/mealType/breakfast"} state={{filter: "Breakfast"}}>Breakfast</NavLink>
                                <NavLink to={"/mealType/snack"} state={{filter: "Snack"}}>Snack</NavLink>
                                <NavLink to={"/mealType/teatime"} state={{filter: "Teatime"}}>Teatime</NavLink>
                            </div>
                        </div>
                        <div className={"dropdown"}>
                            <button>Cuisine Type</button>
                            <div className={"dropdown-content"}>
                                <NavLink to={"/cuisineType/american"} state={{filter: "American"}}>American</NavLink>
                                <NavLink to={"/cuisineType/asian"} state={{filter: "Asian"}}>Asian</NavLink>
                                <NavLink to={"/cuisineType/british"} state={{filter: "British"}}>British</NavLink>
                                <NavLink to={"/cuisineType/caribbean"} state={{filter: "Caribbean"}}>Caribbean</NavLink>
                                <NavLink to={"/cuisineType/french"} state={{filter: "French"}}>French</NavLink>
                            </div>
                        </div>
                    </nav>
                    <SearchForm className={"SearchForm"}/>
                </header>
                <div className={"content"}>
                    <div className={"content_left"}>
                        <Outlet/>
                    </div>
                    <div className={"content_right"}>
                        <CountNormaForm className={"CountNormaForm"}/>
                        <MyRecipes/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;