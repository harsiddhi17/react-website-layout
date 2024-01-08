import "./inputfield.css";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({
  name,
  value,
  onChange,
  type,
  placeholder,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const tooglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="input-container">
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          className={className}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={tooglePasswordVisibility}
            className="password-toggle-btn"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </>
  );
};

export default InputField;
