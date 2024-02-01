import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Main() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "#003366" }}
      >
        <div className="nav-main py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <img src={logo} alt="gh" width="100px" height="70px" />
            </ul>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/card" className="nav-link">
              Cars
            </Link>   
            <Link to="/contactus" className="nav-link">
              ContactUs
            </Link>
            <Link to="/about" className="nav-link">
              
              About
            </Link>
            <Link to="/register" className="nav-link">
              
              Register
            </Link>
            <Link to="/login" className="nav-link">
              
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
