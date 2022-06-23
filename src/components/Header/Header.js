//import { Link } from "react-router-dom";
import Buscador from "../Buscador/Buscador";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <p className="navbar-brand">Comics Marvel</p>
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
          {/* <Link className="navbar-brand" to="/" >MovieFlix</Link>
                   <button className="navbar-toggler" type="button" data-bs-toogle="collapse" data-bs-target="#navbarNav"
                   aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarNav" >
                       <ul className="navbar-nav">
                           <li className="nav-item">
                               <Link className="nav-link" to="/" >Home</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link" to="/listado" >Listado</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link" to="/favoritos" >Favoritos</Link>
                           </li>
                       </ul>
                   </div> */}
          <Buscador />
        </div>
      </nav>
    </header>
  );
}

export default Header;
