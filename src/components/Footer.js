import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faTwitter,faGoogle } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="jumbotron text-center fixed-bottom bg-dark text-light fs-5">
        <p>&copy; All Rights Reserved</p>
        <button className="btn m-1" style={{ backgroundColor: "#3b5998", color: "#fff" }}>
          <FontAwesomeIcon icon={faFacebookF} />
        </button>

        <button className="btn m-1" style={{ backgroundColor: "#55acee", color: "#fff" }}>
        <FontAwesomeIcon icon={faTwitter} />
        </button>

        <button className="btn m-1" style={{ backgroundColor: "#dd4b39", color: "#fff" }}>
        <FontAwesomeIcon icon={faGoogle} />
        </button>
      </div>

    </>
  );
};

export default Footer;
