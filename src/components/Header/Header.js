import SearchForm from "../SearchForm/SearchForm";
import "./Header.css"
import {NavLink, Outlet} from "react-router-dom"
import CountNormaForm from "../CountNormaForm/CountNormaForm";

const Header = () => {
    return (
        <>
            <div className="App">
                <header className={"Header"}>
                    <div>
                        <NavLink to={"/"}><div className={"icon"}/></NavLink>
                    </div>
                    <SearchForm className={"SearchForm"}/>
                </header>
                <div className={"content"}>
                    <div className={"content_left"}>
                        <Outlet/>
                    </div>
                    <CountNormaForm className={"CountNormaForm"}/>
                </div>
            </div>
        </>
    )
}

export default Header;