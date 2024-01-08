import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "../UserAuth/userinformation.css";


const UserInformation = ({ handleLogout }) => {
  const [showProfile, setShowProfile] = useState(false);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedin"));
  //   const userData = JSON.parse(localStorage.getItem("users")) || [];

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const logoutAndCloseProfile = () => {
    handleLogout();
    setShowProfile(false);
  };
  return (
    <div className="user-information">
      <FaUserCircle className="user-icon" onClick={toggleProfile} />
      {showProfile && (
        <div className="profile-card">
          <div className="triangle"></div>
          <h3>User Profile</h3>
          {loggedInUser && (
            <>
              <div className="user-details">
                <p>
                  <strong>Name:</strong> {loggedInUser.name}
                </p>
                <p>
                  <strong>Email:</strong> {loggedInUser.email}
                </p>
              </div>
            </>
          )}

          <button onClick={logoutAndCloseProfile} className="btn btn-danger">
            Logout
          </button>
          {/* {userData.map((person, index) => (
            <div key={index}>
              <p>Name: {person.name}</p>
              <p>Email: {person.email}</p>
            </div>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default UserInformation;
