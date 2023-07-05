import React from "react";
import './style.css';
import LoginForm from "../components/forms/LoginForm";

const LoginPage = (props) => {
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div>
      <div className="container">
        <LoginForm setIsLoggedIn={setIsLoggedIn}/>
      </div>
    </div>
  );
};

export default LoginPage;
