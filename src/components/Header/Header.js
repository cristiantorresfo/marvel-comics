import { Link } from "react-router-dom";
import { logout } from "../../firebase";
import Buscador from "../Buscador/Buscador";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/main" > 
            <p className="navbar-brand">Comics Marvel</p>
          </Link>
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <p className="nav-link active" aria-current="page" href="#">
                Home
              </p>
              <p className="nav-link" href="#">
                Favoritos
              </p>
              <p className="nav-link" href="#">
                Pricing
              </p>
            </div>
          </div>
          
          <Buscador />
          
          <Link to="/">
            <button className="btn btn-danger" onClick={logout}>Log out</button>
          </Link>
          
        </div>
      </nav>
    </header>
  );
}

export default Header;
