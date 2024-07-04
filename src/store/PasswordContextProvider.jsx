import React, { useState } from "react";
import PasswordContext from "./PasswordContext";

const PasswordContextProvider = ({ children }) => {
  const [passwords, setPasswords] = useState([]);
  const [editingPassword, setEditingPassword] = useState(null);

  const addPassword = (password) => {
    setPasswords((prevPasswords) => [...prevPasswords, password]);
  };

  const updatePassword = (updatedPassword) => {
    setPasswords((prevPasswords) =>
      prevPasswords.map((password, index) =>
        index === updatedPassword.index ? updatedPassword : password
      )
    );
  };

  const deletePassword = (index) => {
    setPasswords((prevPasswords) =>
      prevPasswords.filter((_, i) => i !== index)
    );
  };

  const editPassword = (index) => {
    setEditingPassword({ ...passwords[index], index });
  };

  return (
    <PasswordContext.Provider
      value={{
        passwords,
        addPassword,
        updatePassword,
        deletePassword,
        editPassword,
        editingPassword,
        setEditingPassword, // Ensure this is included in the context value
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordContextProvider;
