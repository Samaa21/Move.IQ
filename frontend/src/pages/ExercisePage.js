// import React, { useState } from "react";
// import { Box } from "@mui/material";

// import Exercises from "../components/Exercises";
// import SearchExercises from "../components/SearchExercises";

// const ExercisePage = () => {
//   const [exercises, setExercises] = useState([]);
//   const [bodyPart, setBodyPart] = useState("all");

//   return (
//     <Box>
//       {/* <HeroBanner /> */}
//       <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
//       <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
//     </Box>
//   );
// };

// export default ExercisePage;

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";

const ExercisePage = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  // Fetch all exercises on page load
  useEffect(() => {
    const fetchAllExercises = async () => {
      try {
        const response = await fetch("https://api.exercises.com/all"); // Replace with your actual API endpoint
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchAllExercises();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default ExercisePage;
