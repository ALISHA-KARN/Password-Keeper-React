import React from "react";
import "./NewPasswordButton.css";

const NewPasswordButton = (props) => {
  return (
    <div className="new-password-button">
      <button onClick={props.onClick}>
        <span>Add New Password</span>
      </button>
    </div>
  );
};

export default NewPasswordButton;
