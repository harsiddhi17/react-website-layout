import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./form.css";
import InputField from "./InputField";
import { IoIosInformationCircleOutline } from "react-icons/io";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // For validation of email and password field
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

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
  // const isFormFill = input.email !== "" && input.password !== "";
  //For prevent authenticated from accessing login and register page using url
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home"); // Redirect to home or another page if already logged in
    }
  }, [isLoggedIn, navigate]);

  //Form submit
  const handleLogin = (e) => {
    e.preventDefault();

    // Validate inputs before storing in local storage
    if (!validateEmail(input.email)) {
      setErrors({
        ...errors,
        email: "Please enter valid email",
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
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user that matches the provided email
    const loggedUser = users.find(
      (user) => user.email === input.email && user.password === input.password
    );

    if (loggedUser) {
      // localStorage.setItem("oldloggedin", true);
      localStorage.setItem("loggedin", JSON.stringify(loggedUser));
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <InputField
          name="email"
          value={input.email}
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          className="input_style"
          onFocus={() => handleFocus("email")}
          onBlur={() => handleBlur("email")}
        />
        {errors.email && (
          <span className="error-style">
            <IoIosInformationCircleOutline  className="validation-icon"/>
            {errors.email}
          </span>
        )}
        <InputField
          name="password"
          value={input.password}
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
          className="input_style"
          onFocus={() => handleFocus("password")}
          onBlur={() => handleBlur("password")}
        />
        {errors.password && (
          <span className="error-style">
            <IoIosInformationCircleOutline className="validation-icon"/>
            {errors.password}
          </span>
        )}
        <button type="submit" className="btn btn_style">
          Login
        </button>
      </form>
      <p className="form_link_style">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
