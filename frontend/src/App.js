import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Yoga from "./pages/Yoga/Yoga";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import ExercisePage from "./pages/ExercisePage";
import YogZone from "./pages/Yoga/YogZone";
import AiZone from "./pages/Yoga/AiZone";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import DietChart from "./components/DietChart/DietChart"; // Import the DietChart component
// import StyleDietChart from "./components/DietChart/StyleDietChart";
import ExercisePlanner from "./components/ExercisePlanner/ExercisePlanner";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AboutUs from "./components/AboutUs/AboutUs";
import "./App.css";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage for dark mode preference on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ex" element={<ExercisePage />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/start" element={<YogZone />} />
          <Route path="/ai" element={<AiZone />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/diet" element={<DietChart />} /> {/* Add route for DietChart */}
          <Route path="/exerciseplanner" element={<ExercisePlanner />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}