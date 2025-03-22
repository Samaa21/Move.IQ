import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({ exercises = [], setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        let exercisesData = [];

        if (bodyPart === "all") {
          exercisesData = await fetchData(
            "https://exercisedb.p.rapidapi.com/exercises",
            exerciseOptions
          );
        } else {
          exercisesData = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
            exerciseOptions
          );
        }

        if (Array.isArray(exercisesData)) {
          setExercises(exercisesData);
        } else {
          console.error("Unexpected data format:", exercisesData);
          setExercises([]);
        }
      } catch (error) {
        console.error("Error fetching exercises data:", error);
        setExercises([]);
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = Array.isArray(exercises)
    ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    : [];

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {Array.isArray(exercises) && exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;

// import React from "react";
// import { Box, Grid, Typography, Card, CardContent } from "@mui/material";

// const Exercises = ({ exercises }) => {
//   return (
//     <Box
//       sx={{
//         padding: "20px",
//       }}
//     >
//       <Grid container spacing={3}>
//         {exercises.map((exercise, index) => (
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             lg={3} // Adjust this to fit 4-5 cards in a row
//             key={index}
//           >
//             <Card
//               sx={{
//                 backgroundColor: "var(--bg-color)",
//                 color: "var(--text-color)",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                 borderRadius: "8px",
//                 overflow: "hidden",
//               }}
//             >
//               <CardContent>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: "var(--text-color)", // Ensure text color is dynamic
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {exercise.name}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "var(--text-color)" }}>
//                   {exercise.bodyPart}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Exercises;
