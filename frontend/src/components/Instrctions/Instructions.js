import React, { useState, useEffect } from "react";

import { poseInstructions } from "../../utils/data";
import { poseImages } from "../../utils/pose_images";

import "./Instructions.css";

export default function Instructions({ currentPose }) {
  const [instructions, setInstructions] = useState(poseInstructions);

  // Optional: Update the instructions dynamically if currentPose changes
  useEffect(() => {
    setInstructions(poseInstructions);
  }, [currentPose]);

  return (
    <div className="instructions-container">
      <ul className="instructions-list">
        {instructions[currentPose]?.map((instruction, index) => (
          <li key={index} className="instruction">
            {instruction}
          </li>
        ))}
      </ul>
      <img
        className="pose-demo-img"
        src={poseImages[currentPose]}
        alt={`Pose demo for ${currentPose}`} // Added alt text for better accessibility
      />
    </div>
  );
}
