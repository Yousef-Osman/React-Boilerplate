import { Link } from "react-router-dom";
import MoodIcon from "./MoodIcon";

const NavBar = () => {
  const handleClick = () => {
    console.log('mode changed');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid col-md-10 col-sm-11">
        <Link to={"/"} className="navbar-brand">Boilerplate</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link">About</Link>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link cursor-pointer"><MoodIcon onClick={handleClick} /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;