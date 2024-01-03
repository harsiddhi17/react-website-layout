import React, { useEffect } from "react";
import "../components/site.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [signin, setSignIn] = useState(false);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("user")));

    //for check if user is already login or not
    // const loggedInUser = localStorage.getItem('loggedInUser');
    // if (loggedInUser) {
    //   setIsLoggedIn(true);
    //   navigate('/home',{state: loggedInUser});
    // }

  }, []);
  console.log(data);

  //for make user logout
  // const handleLogout = ()=>{
  //   localStorage.removeItem("loggedInUser");
  //   setIsLoggedIn(false);
  //   navigate("/home");
  // }

  // for validation
  const isValidEmail = (email) => {
    return /^(?![0-9])\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError(
        "Email is invalid : It must include @,dot(.) and it should not start with digits"
      );
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^*&])[A-Za-z\d!@#$%^&*()_+={}\[\]:;<>,.?/~\\-]{8,}$/;

    //It'll Check if the new password matches the regex
    const isValid = passwordRegex.test(newPassword);
    setPasswordValid(isValid);
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    console.log(e.target.email.value);
    const enteredEmail = e.target.email.value;
    const enteredPassword = e.target.password.value;

    if (enteredEmail && enteredPassword) {
      if (!localStorage.getItem("user")) {
        localStorage.setItem(
          "user",
          JSON.stringify([
            { email: e.target.email.value, password: e.target.password.value },
          ])
        );
        // localStorage.setItem("loggedInUser", e.target.email.value); // Set logged-in user
        // setIsLoggedIn(true);
        navigate("/home", { state: e.target.email.value });
      } else {
        for (let val of data) {
          setEmail(val.email);
          if (val.email.includes(e.target.email.value)) {
            if (type == "register") {
              alert("User already Exist");
              setSignIn(true);
            } else {
              if (val.password == e.target.password.value) {
                navigate("/home", { state: e.target.email.value });
              } else {
                alert("Password does not match");
              }
            }
            return true;
          }
        }
        if (type == "register" && email !== e.target.email.value) {
          localStorage.setItem(
            "user",
            JSON.stringify([
              ...data,
              {
                email: e.target.email.value,
                password: e.target.password.value,
              },
            ])
          );
          navigate("/home", { state: e.target.email.value });
        } else {
          alert("User does not exist");
          setSignIn(false);
        }
      }
    }
  };
  return (
    <>
      <div className="mainBox">
        <div className="tabs">
          <button
            className={!signin ? "activeBtn" : "nonActive"}
            onClick={() => setSignIn(false)}
          >
            SignUp
          </button>
          <button
            className={signin ? "activeBtn" : "nonActive"}
            onClick={() => setSignIn(true)}
          >
            SignIn
          </button>
        </div>
        <form onSubmit={(e) => handleSubmit(e, signin ? "login" : "register")}>
          <input
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          {error && <h6 style={{ color: "#fa1010" }}>{error}</h6>}
          <input
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br />
          <br />

          {passwordValid ? (
            <p style={{ color: "#008000" }}>Password is valid</p>
          ) : (
            <p style={{ color: "#fa1010" }}>
              Password should contain at least 8 characters including one Uppercase,one lowercase letter,one special character and one number
            </p>
          )}

          <button>{signin ? "SignIn" : "SignUp"}</button>
        </form>

        {/* {isLoggedIn && (<button onClick={handleLogout}>Logout</button>)} */}
      </div>
    </>
  );
};

export default Form;
