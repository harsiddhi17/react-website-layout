import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF,faTwitter,faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FaFacebookF, FaTwitterSquare, FaGoogle } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="jumbotron text-center fixed-bottom bg-dark text-light fs-5">
        <p>&copy; All Rights Reserved</p>
        <button
          className="btn m-1"
          style={{ backgroundColor: "#3b5998", color: "#fff" }}
        >
          {/* <FontAwesomeIcon icon={faFacebookF} /> */}
          <FaFacebookF />
        </button>

        <button
          className="btn m-1"
          style={{ backgroundColor: "#55acee", color: "#fff" }}
        >
          {/* <FontAwesomeIcon icon={faTwitter} /> */}
          <FaTwitterSquare />
        </button>

        <button
          className="btn m-1"
          style={{ backgroundColor: "#dd4b39", color: "#fff" }}
        >
          {/* <FontAwesomeIcon icon={faGoogle} /> */}
          <FaGoogle />
        </button>
      </div>
    </>
  );
};

export default Footer;
