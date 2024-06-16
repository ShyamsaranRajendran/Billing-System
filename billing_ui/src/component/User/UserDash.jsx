import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./user.css";
import SpLoader from "../utils/spinloader";

const User = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const url = isSignUp ? "/signup" : "/login";
    const formData = new FormData(event.target);
    const requestBody = {
      email: formData.get("email"),
      password: formData.get("password"),
      ...(isSignUp && { repeatPassword: formData.get("repeatPassword") }),
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        toast.success("Success! Redirecting to the dashboard...");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        toast.error("Error: " + errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <div className="user-entry">
      {loading && <SpLoader onComplete={handleLoaderComplete} />}
      {!loading && (
        <div className="user-part-2">
          <div className="title">{isSignUp ? "Sign Up" : "Log In"}</div>
          <p>
            {isSignUp ? "Create your account" : "Welcome back, now get in here"}
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            {isSignUp && (
              <>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input
                  type="password"
                  name="repeatPassword"
                  placeholder="Repeat your password"
                  required
                />
                <div className="auth-buttons">
                  <button type="button" className="google-button">
                    Continue with Google
                  </button>
                  <button type="button" className="facebook-button">
                    Continue with Facebook
                  </button>
                </div>
              </>
            )}
            <button type="submit">{isSignUp ? "Sign Up" : "Log In"}</button>
          </form>
          <button className="sign-btn-log-btn" onClick={toggleForm}>
            {isSignUp
              ? "Already have an account? Log In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default User;
