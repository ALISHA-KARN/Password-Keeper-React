import React, { useState } from "react";
import Header from "./components/Header";
import NewPasswordButton from "./components/NewPasswordButton";
import PasswordForm from "./components/PasswordForm";
import PasswordList from "./components/PasswordList";
import PasswordContextProvider from "./store/PasswordContextProvider";

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openFormHandler = () => {
    setIsFormOpen(true);
  };

  const closeFormHandler = () => {
    setIsFormOpen(false);
  };

  return (
    <PasswordContextProvider>
      {isFormOpen && <PasswordForm onClose={closeFormHandler} />}
      <div className="App">
        <Header />
        <NewPasswordButton onClick={openFormHandler} />
        <PasswordList onEdit={openFormHandler} />
      </div>
    </PasswordContextProvider>
  );
}
