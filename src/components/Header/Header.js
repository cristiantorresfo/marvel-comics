import { Link } from "react-router-dom";
import { logout } from "../../firebase";
import Buscador from "../Buscador/Buscador";
import "./Header.css";

function Header() {
  return (
    <header className="navHeader">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="link" to="/main">
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
              <Link className="link" to="/main/favorites">
                <p className="nav-link">Favoritos</p>
              </Link>
            </div>
          </div>

          <Buscador />

          <Link to="/">
            <button className="btn btn-danger" onClick={logout}>
              Log out
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
