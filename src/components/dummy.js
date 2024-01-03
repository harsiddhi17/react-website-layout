import React, { useEffect } from "react";
import "../components/site.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [signin, setSignIn] = useState(false);
  const [data, setData] = useState([]);
  const [email, setEmail] =useState('');

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("user")));
  }, []);
  console.log(data);

  const navigate = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (e.target.email.value && e.target.password.value) {
      if (!localStorage.getItem("user")) {
        localStorage.setItem(
          "user",
          JSON.stringify([
            { email: e.target.email.value, password: e.target.password.value },
          ])
        );
        navigate("/home", { state: e.target.email.value });
      } 
      else {
        for (let val of data) {
          setEmail(val.email);
          if (val.email == e.taget.email.value) {
            if (type == "SIGNUP") {
              alert("User already exist");
              setSignIn(true);
            } else {
              if (val.password == e.target.password.value) {
                navigate("/home", { state: e.target.email.value });
              } else {
                alert("Password does not match");
              }
            }
          }
          return true;
        }

        if (type == 'SIGNUP' && email !== e.target.email.value) {
          localStorage.setItem('user', JSON.stringify([...data,{email: e.target.email.value, password: e.target.password.value}]))
          navigate("/home", { state: e.target.email.value });
          
        }
        else{
          alert("user not exist");
          setSignIn(false); 
        }
      }
    }
  };

  return (
    <>
      <div className="mainBox">
        <div className="tabs">
          <h1
            className={!signin ? "activeBtn" : "nonActive"}
            onClick={() => setSignIn(false)}
          >
            SignUp
          </h1>
          <h1
            className={signin ? "activeBtn" : "nonActive"}
            onClick={() => setSignIn(true)}
          >
            SignIn
          </h1>
        </div>

        <form
          onSubmit={(e) => handleSubmit(e, signin ? "SIGNIN" : "SIGNUP")}
          className="form_container"
        >
          <input
            name="email"
            placeholder="enter email"
            className="form_field"
          />
          <input
            name="password"
            placeholder="enter password"
            className="form_field"
          />
          <button className="form_btn">{signin ? "SignIn" : "Signup"}</button>
        </form>
      </div>
    </>
  );
};

export default Form;




// HOME PAGE START
import React from "react";
import { useState } from "react";
import "../components/site.css";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {

  const data = useLocation();
  const navigate = useNavigate();
  console.log(data);

  return (
    <>
      <h6>Home {data.state}</h6>
      <button onClick={() => {navigate(-1)}}>Go Back</button>

      
    </>
  );
};

export default Home;
