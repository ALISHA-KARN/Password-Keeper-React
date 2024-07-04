import React, { useContext } from "react";
import PasswordContext from "../store/PasswordContext";
import "./Header.css";

const Header = () => {
  const { passwords } = useContext(PasswordContext);
  return (
    <header className="header">
      <h1>Password Keeper</h1>
      <p>Total Passwords: {passwords.length}</p>
    </header>
  );
};

export default Header;
