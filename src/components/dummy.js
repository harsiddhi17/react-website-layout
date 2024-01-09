import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-lg">
        <div className="container-fluid">
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
                <NavLink
                  to="/"
                  className="nav-NavLink navitem_text"
                  style={({ isActive }) => ({
                    color: isActive ? "#f2a708" : "#ffffff",
                  })}
                >
                  Main
                </NavLink>
              </li>
              <li className="nav-item fs-4 nav_tab">
                <NavLink
                  to="home"
                  className="nav-NavLink navitem_text"
                  style={({ isActive }) => ({
                    color: isActive ? "#f2a708" : "#ffffff",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item fs-4 nav_tab">
                <NavLink
                  to="about"
                  className="nav-NavLink navitem_text"
                  style={({ isActive }) => ({
                    color: isActive ? "#f2a708" : "#ffffff",
                  })}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item fs-4 nav_tab">
                <NavLink
                  to="blog"
                  className="nav-NavLink navitem_text"
                  style={({ isActive }) => ({
                    color: isActive ? "#f2a708" : "#ffffff",
                  })}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item fs-4">
                <NavLink to="register" className="nav-NavLink">
                  <button className="btn btn-success">Sign Up</button>
                </NavLink>
              </li>

              <li className="nav-item fs-4">
                <NavLink to="login" className="nav-NavLink">
                  <button className="btn btn-success">Sign In</button>
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







import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./form.css";
import InputField from "./InputField";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  //For prevent authenticated from accessing login and register page using url
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home"); // Redirect to home or another page if already logged in
    }
  }, [isLoggedIn, navigate]);

  // For validation of email and password field
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regEx.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const isFormFilled =
    input.name !== "" && input.email !== "" && input.password !== "";
  // For store value in localstorage
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs before storing in local storage
    if (input.name.trim() === "") {
      setErrors({ ...errors, name: "Please enter a username" });
      return;
    } else {
      setErrors({ ...errors, name: "" });
    }
    if (!validateEmail(input.email)) {
      setErrors({
        ...errors,
        email: "Email should contain '@' and non-whitespace characters'",
      });
      return;
    } else {
      setErrors({ ...errors, email: "" });
    }

    if (!validatePassword(input.password)) {
      setErrors({
        ...errors,
        password: "Password must be at least 8 characters",
      });
      return;
    } else {
      setErrors({ ...errors, password: "" });
    }

    // Fetch existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Append the new user to the existing array of users
    const updatedUsers = [...existingUsers, input];

    // Store the updated array of users back in localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate("/login");
  };

  return (
    <div className="register-form">
      <h2>CREATE AN ACCOUNT</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <InputField
          name="name"
          value={input.name}
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
            setErrors({ ...errors, name: "" });
          }}
          type="text"
          placeholder="Username"
          className="input_style"
        />
        {errors.name && (
          <span className="error" style={{ color: "red" }}>
            {errors.name}
          </span>
        )}

        <InputField
          name="email"
          value={input.email}
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
            setErrors({ ...errors, email: "" });
          }}
          type="email"
          placeholder="Email"
          className="input_style"
        />

        {errors.email && (
          <span className="error" style={{ color: "red" }}>
            {errors.email}
          </span>
        )}

        <InputField
          name="password"
          value={input.password}
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
            setErrors({ ...errors, password: "" });
          }}
          type="password"
          placeholder="Password"
          className="input_style"
        />
        {errors.password && (
          <span className="error" style={{ color: "red" }}>
            {errors.password}
          </span>
        )}

        <button
          type="submit"
          className="btn btn_style"
          disabled={!isFormFilled}
        >
          Register
        </button>
      </form>

      <p className="form_link_style">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;


// focus and blur and submit register.js

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./form.css";
import InputField from "./InputField";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // For validation of email and password field
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  //For prevent authenticated from accessing login and register page using url
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home"); // Redirect to home or another page if already logged in
    }
  }, [isLoggedIn, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const validateEmail = (email) => {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regEx.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // Validation for individual fields on focus and blur
  const handleFocus = (field) => {
    setErrors({ ...errors, [field]: "" });
  };

  const handleBlur = (field) => {
    switch (field) {
      case "name":
        if (input.name.trim() === "") {
          setErrors({ ...errors, name: "Name is Required" });
        }
        break;
      case "email":
        if (!validateEmail(input.email)) {
          setErrors({
            ...errors,
            email: "Email is required",
          });
        }
        break;
      case "password":
        if (!validatePassword(input.password)) {
          setErrors({
            ...errors,
            password: "Password is required",
          });
        }
        break;
      default:
        break;
    }
  };
  const isFormFilled =
    input.name !== "" && input.email !== "" && input.password !== "";
  // For store value in localstorage

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs before storing in local storage
    if (input.name.trim() === "") {
      setErrors({ ...errors, name: "Please enter a username" });
      return;
    } else {
      setErrors({ ...errors, name: "" });
    }
    if (!validateEmail(input.email)) {
      setErrors({
        ...errors,
        email: "Email should contain '@' and non-whitespace characters'",
      });
      return;
    } else {
      setErrors({ ...errors, email: "" });
    }

    if (!validatePassword(input.password)) {
      setErrors({
        ...errors,
        password: "Password must be at least 8 characters",
      });
      return;
    } else {
      setErrors({ ...errors, password: "" });
    }

    // Fetch existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Append the new user to the existing array of users
    const updatedUsers = [...existingUsers, input];

    // Store the updated array of users back in localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate("/login");
  };

  return (
    <div className="register-form">
      <h2>CREATE AN ACCOUNT</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <InputField
          name="name"
          value={input.name}
          onChange={handleInputChange}
          onFocus={() => handleFocus("name")}
          onBlur={() => handleBlur("name")}
          type="text"
          placeholder="Enter Username"
          className="input_style"
        />
        {errors.name && (
          <span className="error" style={{ color: "red" }}>
            {errors.name}
          </span>
        )}

        <InputField
          name="email"
          value={input.email}
          onChange={handleInputChange}
          onFocus={() => handleFocus("email")}
          onBlur={() => handleBlur("email")}
          type="email"
          placeholder="Enter Email"
          className="input_style"
        />

        {errors.email && (
          <span className="error" style={{ color: "red" }}>
            {errors.email}
          </span>
        )}

        <InputField
          name="password"
          value={input.password}
          onChange={handleInputChange}
          onFocus={() => handleFocus("password")}
          onBlur={() => handleBlur("password")}
          type="password"
          placeholder="Enter Password"
          className="input_style"
        />
        {errors.password && (
          <span className="error" style={{ color: "red" }}>
            {errors.password}
          </span>
        )}

        <button
          type="submit"
          className="btn btn_style"
          disabled={!isFormFilled}
        >
          Register
        </button>
      </form>

      <p className="form_link_style">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
