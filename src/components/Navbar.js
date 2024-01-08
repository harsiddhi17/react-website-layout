import React, { useState } from "react";
import "../components/navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import UserInformation from "./UserAuth/UserInformation";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  //For prevent authenticated from accessing login and register page using url
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    // navigate("/login");
    navigate("/");
  };
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>C</span>inovic
            <span>T</span>ECHNOLOGIES
          </h2>
        </div>

        {/* 2nd menu start */}
        <div className={showMenu ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <NavLink
                to="home"
                style={({ isActive }) => ({
                  color: isActive ? "#f2a708" : "#000",
                })}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                style={({ isActive }) => ({
                  color: isActive ? "#f2a708" : "#000",
                })}
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blog"
                style={({ isActive }) => ({
                  color: isActive ? "#f2a708" : "#000",
                })}
              >
                blog
              </NavLink>
            </li>
          </ul>
        </div>

        {/* signup and signin start */}
        <div className="account-buttons">
          <ul className="account-buttons-desktop">
            {isLoggedIn && <UserInformation handleLogout={handleLogout} />}

            {!isLoggedIn && (
              <>
                <li>
                  <NavLink to="register">Sign Up</NavLink>
                </li>
                <li>
                  <NavLink to="login">Sign In</NavLink>
                </li>
              </>
            )}
            {/* {isLoggedIn && (
              <>
                <li>
                  <button
                    type="submit"
                    onClick={handleLogout}
                    className="btn btn-success"
                  >
                    Logout
                  </button>
                </li>
              </>
            )} */}
          </ul>
          {/* hamburger menu start */}

          <div className="hamburger-menu">
            {/* Show user icon next to hamburger on small screens */}
            <div className="user-icon-mobile">
              {isLoggedIn && <UserInformation handleLogout={handleLogout} />}
              {!isLoggedIn && (
                <>
                  <li>
                    <NavLink to="login">Sign In</NavLink>
                  </li>
                </>
              )}
            </div>
            <NavLink to="#" onClick={() => setShowMenu(!showMenu)}>
              <GiHamburgerMenu />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
