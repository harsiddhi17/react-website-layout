import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./form.css";
import InputField from "./InputField";
import { IoIosInformationCircleOutline } from "react-icons/io";

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
  // const isFormFilled =
  //   input.name !== "" && input.email !== "" && input.password !== "";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
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
          <span className="error-style">
            <IoIosInformationCircleOutline className="validation-icon" />
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
          <span className="error-style">
            <IoIosInformationCircleOutline className="validation-icon" />
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
          <span className="error-style">
            <IoIosInformationCircleOutline className="validation-icon" />
            {errors.password}
          </span>
        )}

        <button type="submit" className="btn btn_style">
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
