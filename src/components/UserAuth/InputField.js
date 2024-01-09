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
  onFocus,
  onBlur,
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
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={tooglePasswordVisibility}
            className="password-toggle-btn"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>
    </>
  );
};

export default InputField;
