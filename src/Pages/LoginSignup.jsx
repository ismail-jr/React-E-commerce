import React from "react";
import "./CSS/loginsignup.css";

const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Your name:" />
          <input type="email" placeholder="Email Address:" />
          <input type="password" placeholder="Password:" />
        </div>
        <button className="signup-btn">Continue</button>
        <p className="have-acc">
          Already have an account <span>login here</span>
        </p>
        <div className="terms">
          <input type="checkbox" id="" name="" />
          <p>By continuing, I agree to the term of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
