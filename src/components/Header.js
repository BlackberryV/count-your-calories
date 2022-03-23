import SearchForm from "./SearchForm";
import "./Header.css"

const Header = () => {
  return (
      <header className={"Header"}>
          <div>
              Hello
          </div>
          <SearchForm className={"SearchForm"}/>
      </header>
  )
}

export default Header;