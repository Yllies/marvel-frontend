import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <>
      <header>
        <img src={logo} />
        <Link to="/characters">
          <span>Personnages</span>
        </Link>
        <Link to="/comics">
          <span>Films</span>
        </Link>
      </header>
    </>
  );
};

export default Header;
