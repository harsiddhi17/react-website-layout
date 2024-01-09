import React from "react";

const Validation = (values) => {
  const errors = {};
  //   const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,8}$/;
  //   const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z][a-zA-Z0-9]{8,})$/;

  if (!values.name) {
    errors.name = "Name is Required";
  }

  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.lenght < 8) {
    errors.password = "Password must be more than 8 characters";
  }
  return errors;
};

export default Validation;
