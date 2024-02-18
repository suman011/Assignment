import React from "react";

const Input = ({ label, type, id }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} id={id} name={id} autoComplete="off" />
    </div>
  );
};

export default Input;
