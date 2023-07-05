import React from "react";
import "./style.css";
import SignupForm from "../components/forms/SignupForm";

const SignupPage = (props) => {
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <>
      <div className="container">
        <SignupForm setIsLoggedIn={setIsLoggedIn}/>
      </div>
    </>
  );
};

export default SignupPage;
