import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import "../CSS-files/signin.css";
import axios from "axios";
import { log } from "../App";
const url = "http://localhost:8000/";

function Signin() {
  const [UserID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { UserID, password };
    try {
      const response = await axios.post('https://real-estate-22.herokuapp.com/', data, { withCredentials: true });
      const userEmail = response.data.userEmail;
      const userName = response.data.userName;
      console.log(userEmail, userName);

      navigate(`/AllProperties/${userEmail}/${userName}`);
    } catch (error) {
      setError(error.response.data.msg);
      console.log(error.response);
    }
  };
  return (
    <div className="sign-in-parent">
      <div className="sign-in-form-container">
        <h1 style={{ color: "#4c57b6" }}>Logo</h1>
        <p>Enter your credentials to access your Account</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="UserID"
            placeholder="Mail ID"
            name="UserID"
            value={UserID}
            required
            onChange={(e) => setUserID(e.target.value)}
          />

          <input
            className="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            className="eye"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            <img src="/icons/eye-slash.png" alt="no image" />
          </span>

          <button type="submit" className="submit-button">
            Sign in
          </button>
        </form>
        <div
          className="signin-error-display"
          style={{
            display: error ? "block" : "none",
            marginTop: "1vw",
            color: "red",
          }}
        >
          <p>{error}</p>
        </div>
      </div>

      <h3>
        <span className="sign-in-question">Don't have an account?</span>
        <span className="signup-option-text">
          <Link to={"/Signup"}>Sign up</Link>
        </span>
      </h3>
    </div>
  );
}
export default Signin;
