import React, { useContext, useState, useEffect } from "react";
import Modal from "./Modal";
import PasswordContext from "../store/PasswordContext";
import "./PasswordForm.css";

const PasswordForm = ({ onClose }) => {
  const { addPassword, updatePassword, editingPassword, setEditingPassword } =
    useContext(PasswordContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (editingPassword) {
      setUsername(editingPassword.username);
      setPassword(editingPassword.password);
    }
  }, [editingPassword]);

  const handleSubmit = () => {
    if (editingPassword) {
      updatePassword({ username, password, index: editingPassword.index });
      setEditingPassword(null);
    } else {
      addPassword({ username, password });
    }
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className="form-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <div className="button-container">
          <button onClick={handleSubmit}>
            {editingPassword ? "Update" : "Add"}
          </button>
          <button onClick={onClose}>X</button>
        </div>
      </div>
    </Modal>
  );
};

export default PasswordForm;
