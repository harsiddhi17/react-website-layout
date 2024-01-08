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
