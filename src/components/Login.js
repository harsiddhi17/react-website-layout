import React, { useState,useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../components/register.css";
const Login = () => {
  
  const [input, setInput] = useState({
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


  const handleLogin = (e) => {
    e.preventDefault();
    
    // Fetch existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user that matches the provided email
    const loggedUser = users.find(
      (user) => user.email === input.email && user.password === input.password
    );

    if (loggedUser) {
      localStorage.setItem("loggedin", true);
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          name="email"
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          type="email"
          placeholder="Email"
          className="input_style"
        />
        <input
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          type="password"
          placeholder="Password"
          className="input_style"
        />
        <button type="submit" className="btn_style">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
