import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../CSS-files/signup.css";
import axios from "axios";
const url = process.env.BACKEND_URL+'/register'
console.log(url)
function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [UserID, setUserID] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { UserID, password, name };
    try {
      if (password != confirmPassword) {
        setError("Passwords do not match!!");
        return;
      }
      const response = await axios.post('https://real-estate-22.herokuapp.com/register', data);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data.msg);
      console.log(error.response);
    }
  };

  return (
    <div className="sign-up-parent">
      <div className="sign-up-form-container">
        <h1 style={{ color: "#4c57b6" }}>Logo</h1>
        <p>Create New Account</p>
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
            type="text"
            className="name"
            placeholder="name"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="password"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className="confirm-password"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
        <div
          className="signup-error-display"
          style={{
            display: error ? "block" : "none",
            marginTop: "2vw",
            color: "red",
          }}
        >
          <p>{error}</p>
        </div>
      </div>
      {/* <Link to="/signin">
        <h3>Sign In</h3>
      </Link> */}
      <h3 className="signin-option-text">
        <Link to={"/"}>Sign In</Link>
      </h3>
    </div>
  );
}
export default Signup;
