import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-lg">
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
            Navbar
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item fs-4">
                <Link to="home" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item fs-4">
                <Link to="about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item fs-4">
                <Link to="blog" className="nav-link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
