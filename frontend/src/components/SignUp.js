// import React, { useState } from "react";
// import { GoogleLogin } from "@react-oauth/google";

// const SignUp = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-up logic here
//     if (!name || !email || !height || !weight || !age || !gender) {
//       alert("Please fill in all fields!");
//       return;
//     }
//     console.log("Sign Up Submitted", {
//       name,
//       email,
//       height,
//       weight,
//       age,
//       gender,
//     });
//   };

//   // Handle successful Google login
//   const handleGoogleLoginSuccess = (credentialResponse) => {
//     const token = credentialResponse.credential; // Get the JWT token
//     const payload = token.split(".")[1]; // Extract the payload part
//     const decoded = JSON.parse(atob(payload)); // Decode and parse the payload
//     console.log("Google Login Success:", decoded);

//     // Auto-fill the form with Google data
//     setName(decoded.name || ""); // Set the name from Google profile
//     setEmail(decoded.email || ""); // Set the email from Google profile
//   };

//   // Handle Google login failure
//   const handleGoogleLoginFailure = () => {
//     console.log("Google Login Failed");
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-card">
//         <h2>Create Your Account</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <div className="input-with-icon">
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//                 required
//               />
             
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <div className="input-with-icon">
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 required
//               />
             
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="height">Height (cm)</label>
//             <div className="input-with-icon">
//               <input
//                 type="number"
//                 id="height"
//                 value={height}
//                 onChange={(e) => setHeight(e.target.value)}
//                 placeholder="Enter your height"
//                 required
//               />
             
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="weight">Weight (kg)</label>
//             <div className="input-with-icon">
//               <input
//                 type="number"
//                 id="weight"
//                 value={weight}
//                 onChange={(e) => setWeight(e.target.value)}
//                 placeholder="Enter your weight"
//                 required
//               />
             
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="age">Age</label>
//             <div className="input-with-icon">
//               <input
//                 type="number"
//                 id="age"
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//                 placeholder="Enter your age"
//                 required
//               />
             
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="gender">Gender</label>
//             <div className="input-with-icon">
//               <select
//                 id="gender"
//                 value={gender}
//                 onChange={(e) => setGender(e.target.value)}
//                 required
//               >
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
             
//             </div>
//           </div>
//           <button type="submit" className="signup-button">
//             Sign Up
//           </button>
//         </form>

//         {/* Google Sign-In Button */}
//         <div  className="google-signin">
//           <GoogleLogin
//             onSuccess={handleGoogleLoginSuccess}
//             onError={handleGoogleLoginFailure}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import signupImage from "./signup-banner.jpeg"; // ✅ Import Image

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !height || !weight || !age || !gender) {
      alert("Please fill in all fields!");
      return;
    }
    console.log("Sign Up Submitted", {
      name,
      email,
      height,
      weight,
      age,
      gender,
    });
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload));
    console.log("Google Login Success:", decoded);

    setName(decoded.name || "");
    setEmail(decoded.email || "");
  };

  const handleGoogleLoginFailure = () => {
    console.log("Google Login Failed");
  };

  return (
    <div
      className="signup-container"
      style={{
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="signup-wrapper"
        style={{
          display: "flex",
          width: "60%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Sign Up Form (Left Side) */}
        <div
          className="signup-card"
          style={{
            padding: "2rem",
            width: "50%",
            textAlign: "center",
          }}
        >
          <h2>Create Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                style={inputStyle}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={inputStyle}
              />
            </div>

            <div className="form-group">
              <label htmlFor="height">Height (cm)</label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height"
                required
                style={inputStyle}
              />
            </div>

            <div className="form-group">
              <label htmlFor="weight">Weight (kg)</label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
                required
                style={inputStyle}
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                required
                style={inputStyle}
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                style={inputStyle}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button type="submit" className="signup-button" style={buttonStyle}>
              Sign Up
            </button>
          </form>

          {/* Google Sign-In Button */}
          <div className="google-signin" style={{ marginTop: "1rem" }}>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginFailure}
            />
          </div>
        </div>

        {/* Image (Right Side) */}
        <div
          className="image-section"
          style={{
            width: "60%",
          }}
        >
          <img
            src={signupImage} // ✅ Use imported image
            alt="Sign Up Visual"
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

// Common Styles
const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
  marginBottom: "1rem",
};

const buttonStyle = {
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "1rem",
};

export default SignUp;
