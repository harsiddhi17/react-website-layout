import React from "react";
import "../UserAuth/form.css";


const Home = () => {
  const userName = JSON.parse(localStorage.getItem("users"));
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("loggedin");
  //   navigate("/login");
  // };

  return (
    <>
      <h6>Home Page</h6>
      <div className="username-display">welcome- {userName.name}</div>
      {/* <button type="submit" onClick={handleLogout} className="btn btn-success">
        Logout
      </button> */}
    </>
  );
};

export default Home;
