import SearchForm from "./SearchForm";
import "./styles/index.css"
import "./styles/media.css"
import {NavLink, Outlet} from "react-router-dom"
import CountNormaForm from "./CountNormaForm";
import MyRecipes from "./MyRecipes";

const Layout = () => {

    function handleClick() {
        const menuToggle = document.querySelector(".menu-toggle")
        const topMenu = document.querySelector(".top-menu")

        menuToggle.onclick = function () {
            menuToggle.classList.toggle("menu-toggle_active");
            topMenu.classList.toggle("top-menu_active");
        }

        document.addEventListener('click', e => {
                const withinBoundariesToggle = e.composedPath().includes(menuToggle);
                const withinBoundariesTop = e.composedPath().includes(topMenu);
                if (!withinBoundariesToggle && !withinBoundariesTop) {
                    menuToggle.classList.remove("menu-toggle_active");
                    topMenu.classList.remove("top-menu_active");
                }
            }
        )
    }

    return (
        <>
            <div className="App">
                <header className={"Header"}>
                    <div className={"nav-wrapper"}>
                        <NavLink to={"/"}>
                            <div className={"icon"}/>
                        </NavLink>
                        <nav className={"top-menu"}>
                            <div className={"dropdown"}>
                                <button>Meal Type</button>
                                <div className={"dropdown-content"}>
                                    <NavLink to={"/mealType/dinner"} state={{filter: "Dinner"}}>Dinner</NavLink>
                                    <NavLink to={"/mealType/lunch"} state={{filter: "Lunch"}}>Lunch</NavLink>
                                    <NavLink to={"/mealType/breakfast"}
                                             state={{filter: "Breakfast"}}>Breakfast</NavLink>
                                    <NavLink to={"/mealType/snack"} state={{filter: "Snack"}}>Snack</NavLink>
                                    <NavLink to={"/mealType/teatime"} state={{filter: "Teatime"}}>Teatime</NavLink>
                                </div>
                            </div>
                            <div className={"dropdown"}>
                                <button>Cuisine Type</button>
                                <div className={"dropdown-content"}>
                                    <NavLink to={"/cuisineType/american"}
                                             state={{filter: "American"}}>American</NavLink>
                                    <NavLink to={"/cuisineType/asian"} state={{filter: "Asian"}}>Asian</NavLink>
                                    <NavLink to={"/cuisineType/british"} state={{filter: "British"}}>British</NavLink>
                                    <NavLink to={"/cuisineType/caribbean"}
                                             state={{filter: "Caribbean"}}>Caribbean</NavLink>
                                    <NavLink to={"/cuisineType/french"} state={{filter: "French"}}>French</NavLink>
                                </div>
                            </div>
                            <button className={"my-recipes_link"}><NavLink to={"/myRecipes"}>My Recipes</NavLink>
                            </button>
                        </nav>
                    </div>
                    <SearchForm className={"SearchForm"}/>

                    <button onClick={handleClick} className={"menu-toggle"}/>

                </header>
                <div className={"content"}>
                    <div className={"content_left"}>
                        <CountNormaForm className={"CountNormaForm"}/>
                        <MyRecipes/>
                    </div>
                    <div className={"content_right"}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;