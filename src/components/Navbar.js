import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  
  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-lg">
        <div className="container-fluid">
          {/* <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink> */}
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
              <li className="nav-item fs-4 nav_tab">
                <NavLink to="home" className="nav-NavLink navitem_text" style={({ isActive }) => ({color: isActive ? "#f2a708": "#ffffff"})}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item fs-4 nav_tab">
                <NavLink to="about" className="nav-NavLink navitem_text" style={({ isActive }) => ({color: isActive ? "#f2a708": "#ffffff"})}>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item fs-4 nav_tab">
                <NavLink to="blog" className="nav-NavLink navitem_text" style={({ isActive }) => ({color: isActive ? "#f2a708": "#ffffff"})}>
                  Blog
                </NavLink>
              </li>

              {/* {isLoggedIn && (
                <li className="nav-item fs-4">
                  <button onClick={handleLogout} className="btn btn-danger">
                    Logout
                  </button>
                </li>
              )}
              {!isLoggedIn && (
                <li className="nav-item fs-4">
                  <NavLink to="form" className="nav-NavLink">
                    <button className="btn btn-success">Sign Up</button>
                  </NavLink>
                </li>
              )} */}

              <li className="nav-item fs-4">
                <NavLink to="form" className="nav-NavLink">
                  <button className="btn btn-success">Sign Up</button>
                </NavLink>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
