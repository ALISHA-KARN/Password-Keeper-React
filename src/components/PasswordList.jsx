import React, { useContext, useState } from "react";
import PasswordContext from "../store/PasswordContext";
import "./PasswordList.css";

const PasswordList = ({ onEdit }) => {
  const { passwords, deletePassword, editPassword } =
    useContext(PasswordContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPasswords = passwords.filter(
    (password) =>
      password.username &&
      password.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="password-list">
      <input
        type="text"
        placeholder="Search passwords..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        className="search-input"
      />
      <h2>All Passwords</h2>

      <ul className="password-ul">
        {filteredPasswords.map((password, index) => (
          <li key={index} className="password-item">
            {password.username}: {password.password}
            <button
              onClick={() => {
                editPassword(index);
                onEdit();
              }}
              className="edit-button"
            >
              Edit
            </button>
            <button
              onClick={() => deletePassword(index)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordList;
