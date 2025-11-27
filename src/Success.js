import React from "react";
import "./App.css";

const Success = ({ data, onReset }) => {
  return (
    <div className="container">
      <div className="successMessage">Registration Successful!</div>
      <div className="successText">
        Thank you <strong>{data.name}</strong> for registering for <strong>{data.course}</strong>.
      </div>
      <button className="button submitButton" onClick={onReset}>
        Register Another Student
      </button>
    </div>
  );
};

export default Success;
