import React from "react";

import "./input.css";

const Input = ({ label, onChange, ...rest }) => {
  return (
    <div className="input-wrapper">
      <p className="label">{label}</p>
      <input
        className="input"
        // placeholder="form-input"
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default Input;