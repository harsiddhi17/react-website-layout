import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitterSquare, FaGoogle } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer-style">
        <p>&copy; All Rights Reserved</p>
        <button className="btn footer-btn facebook">
          <FaFacebookF />
        </button>

        <button className="btn footer-btn twitter">
          <FaTwitterSquare />
        </button>

        <button className="btn footer-btn google">
          <FaGoogle />
        </button>
      </div>
    </>
  );
};

export default Footer;
