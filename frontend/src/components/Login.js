import React, { useState } from "react";
import gymImage from "./5-Reasons-Why-Your-Residential-Building-Needs-a-Professional-Gym-Banner-1200x620.jpg";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields!");
      return;
    }
    console.log("Login Submitted", { email, password });
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="login-wrapper"
        style={{
          display: "flex",
          width: "60%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Login Card (Left Side) */}
        <div
          className="login-card"
          style={{
            padding: "2rem",
            width: "50%",
            textAlign: "center",
          }}
        >
          <h2>Welcome Back!</h2>
          <p style={{ fontStyle: "italic", marginBottom: "1.5rem" }}>
            "The only bad workout is the one you didn't do."
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Email
              </label>
              <div className="input-with-icon" style={{ position: "relative" }}>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    paddingLeft: "2rem",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <span
                  className="icon"
                  style={{
                    position: "absolute",
                    left: "0.5rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  ✉️
                </span>
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Password
              </label>
              <div className="input-with-icon" style={{ position: "relative" }}>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    paddingLeft: "2rem",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <span
                  className="icon"
                  style={{
                    position: "absolute",
                    left: "0.5rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  🔒
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="login-button"
              style={{
                width: "100%",
                padding: "0.75rem",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Login
            </button>
          </form>
          <div className="signup-link" style={{ marginTop: "1rem" }}>
            Don't have an account?{" "}
            <a href="/signup" style={{ color: "#007BFF", textDecoration: "none" }}>
              Sign Up
            </a>
          </div>
        </div>

        {/* Image (Right Side) */}
        <div
          className="image-section"
          style={{
            width: "60%",
            marginLeft:"2px"
          }}
        >
          <img
            src={gymImage}
            alt="Login Visual"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
