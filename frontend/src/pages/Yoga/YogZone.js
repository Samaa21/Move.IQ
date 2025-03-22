// import React, { useState, useEffect } from "react";
// import { count } from "../../utils/music";
// import Instructions from "../../components/Instrctions/Instructions";
// import DropDown from "../../components/DropDown/DropDown";
// import { poseImages } from "../../utils/pose_images";

// import "./Yogzone.css";

// // Define the pose list here
// const poseList = [
//   "Tree",
//   "Chair",
//   "Cobra",
//   "Warrior",
//   "Dog",
//   "Shoulderstand",
//   "Triangle",
// ];

// let interval;

// function Yogzone() {
//   const [currentPose, setCurrentPose] = useState("Tree");
//   const [poseTime, setPoseTime] = useState(0);
//   const [bestPerform, setBestPerform] = useState(0);
//   const [isStartPose, setIsStartPose] = useState(false);
//   const [startingTime, setStartingTime] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);

//   useEffect(() => {
//     const timeDiff = (currentTime - startingTime) / 1000;
//     if ((currentTime - startingTime) / 1000 > bestPerform) {
//       setBestPerform(timeDiff);
//     }
//   }, [currentTime]);

//   useEffect(() => {
//     setCurrentTime(0);
//     setPoseTime(0);
//     setBestPerform(0);
//   }, [currentPose]);

//   function startYoga() {
//     setIsStartPose(true);
//     const countAudio = new Audio(count);
//     countAudio.loop = true;
//     interval = setInterval(() => {
//       const timeDiff = (currentTime - startingTime) / 1000;
//       setPoseTime(timeDiff);

//       if (timeDiff > bestPerform) {
//         setBestPerform(timeDiff);
//       }
//     }, 100);
//   }

//   function stopPose() {
//     setIsStartPose(false);
//     clearInterval(interval);
//   }

//   if (isStartPose) {
//     return (
//       <div className="yoga-container">
//         <div className="performance-container">
//           <div className="pose-performance">
//             <h4>Pose Time: {poseTime} s</h4>
//           </div>
//           <div className="pose-performance">
//             <h4>Best: {bestPerform} s</h4>
//           </div>
//         </div>
//         <div>
//           <img src={poseImages[currentPose]} className="pose-img" />
//         </div>
//         <button onClick={stopPose} className="secondary-btn">
//           Stop Pose
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="yoga-container">
//       <DropDown
//         poseList={poseList}
//         currentPose={currentPose}
//         setCurrentPose={setCurrentPose}
//       />
//       <Instructions currentPose={currentPose} />
//       <button onClick={startYoga} className="secondary-btn">
//         Start Pose
//       </button>
//     </div>
//   );
// }

// export default Yogzone;

// import React, { useState, useEffect } from "react";
// import DropDown from "../../components/DropDown/DropDown";
// import Instructions from "../../components/Instrctions/Instructions";
// import { poseImages } from "../../utils/pose_images";
// import "./YogZone.css";

// let poseList = [
//   "Tree",
//   "Chair",
//   "Cobra",
//   "Warrior",
//   "Dog",
//   "Shoulderstand",
//   "Traingle",
// ];

// function YogZone() {
//   const [currentPose, setCurrentPose] = useState("Tree");
//   const [isDarkMode, setIsDarkMode] = useState(false); // State for dark theme
//   const [showPopup, setShowPopup] = useState(true); // State to control the popup visibility

//   // Toggle dark theme
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   // Effect to update the body class for dark mode
//   useEffect(() => {
//     if (isDarkMode) {
//       document.body.classList.add("dark-theme");
//     } else {
//       document.body.classList.remove("dark-theme");
//     }
//   }, [isDarkMode]);

//   // Function to close the popup
//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className={`yogzone-container ${isDarkMode ? "dark" : ""}`}>
//       {/* Welcome Popup */}
//       {showPopup && (
//         <div className="welcome-popup">
//           <div className="popup-content">
//             <h3>Welcome to YogZone!</h3>
//             <p>
//               We’re thrilled to have you here! Ready to improve your posture and
//               unlock your yoga potential?
//             </p>
//             <p>
//               Before you start, here are a few tips to make the most of your
//               session:
//             </p>
//             <ul>
//               <li>
//                 🔄 Open your camera and position it at an optimal distance.
//               </li>
//               <li>📸 Ensure your whole body is visible in the frame.</li>
//               <li>
//                 💪 Focus on your alignment and aim for your highest score!
//               </li>
//               <li>🧘‍♂️ Take your time, breathe deeply, and enjoy the process.</li>
//             </ul>
//             <p>Let’s get started!</p>
//             <button onClick={closePopup} className="popup-close-btn">
//               Got it!
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Welcome Message */}
//       <div className="welcome-message">
//         <h2>Welcome to YogZone!</h2>
//         <p>Let's improve your posture and enjoy your yoga journey.</p>
//       </div>

//       {/* Dropdown for pose selection */}
//       <DropDown
//         poseList={poseList}
//         currentPose={currentPose}
//         setCurrentPose={setCurrentPose}
//       />

//       {/* Instructions for current pose */}
//       <Instructions currentPose={currentPose} />
//     </div>
//   );
// }

// export default YogZone;

import React, { useState, useEffect } from "react";
import DropDown from "../../components/DropDown/DropDown";
import Instructions from "../../components/Instrctions/Instructions";
import { poseImages } from "../../utils/pose_images";
import { Link } from "react-router-dom"; // Import Link for routing

import "./YogZone.css";

let poseList = [
  "Tree",
  "Chair",
  "Cobra",
  "Warrior",
  "Dog",
  "Shoulderstand",
  "Triangle",
];

function YogZone() {
  const [currentPose, setCurrentPose] = useState("Tree");
  const [showPopup, setShowPopup] = useState(true); // State for the popup

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="yogzone-container">
      {/* Welcome Popup */}
      {showPopup && (
        <div className="welcome-popup">
          <div className="popup-content">
            <h3>Welcome to YogZone!</h3>
            <p>Let's improve your posture and enjoy your yoga journey.</p>
            <p>Here’s how you can get started:</p>
            <ul>
              <li>🧘‍♂️ Select a pose from the dropdown.</li>
              <li>📸 Make sure your camera is set up and visible.</li>
              <li>💪 Strike the pose and start the detection!</li>
            </ul>
            <p>Enjoy your yoga experience!</p>
            <button onClick={closePopup} className="popup-close-btn">
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Welcome Message */}
      <div className="welcome-message">
        <h2>Welcome to YogZone!</h2>
        <p>Let’s improve your posture and enjoy your yoga journey.</p>
      </div>

      {/* Dropdown for pose selection */}
      <DropDown
        poseList={poseList}
        currentPose={currentPose}
        setCurrentPose={setCurrentPose}
      />

      {/* Instructions for current pose */}
      <Instructions currentPose={currentPose} />

      {/* "Start Pose" button that redirects to Aizone */}
      <Link to="/aizone">
        <button className="start-pose-btn">Start Pose</button>
      </Link>
    </div>
  );
}

export default YogZone;
