import React, { useState } from "react";
import "./ExercisePlanner.css";
// import exerciseImage from "./planner.jpg"; // Ensure you have this image in your project

const ExercisePlanner = () => {
  const [exercisePlan, setExercisePlan] = useState([]);
  const [showPlan, setShowPlan] = useState(false);
  const [progress, setProgress] = useState({}); // Track progress

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Generate exercise plan based on inputs
    const plan = generateExercisePlan(data);
    setExercisePlan(plan);
    setShowPlan(true);
  };

  const generateExercisePlan = (data) => {
    const { goal, intensity, duration } = data;
    let plan = [];

    // Warm-up exercises
    plan.push({
      exercise: "Warm-up: Jumping Jacks",
      sets: 1,
      reps: "2 minutes",
      description: "Get your heart rate up and muscles warm.",
      difficulty: "Beginner",
    });

    // Main exercises based on goal
    if (goal === "weight_loss") {
      plan.push(
        { exercise: "Squats", sets: 3, reps: "12 reps", description: "Build lower body strength.", difficulty: "Beginner" },
        { exercise: "Push-ups", sets: 3, reps: "10 reps", description: "Strengthen chest and arms.", difficulty: "Intermediate" },
        { exercise: "Plank", sets: 3, reps: "30 seconds", description: "Core strengthening exercise.", difficulty: "Beginner" },
        { exercise: "Cardio: Running", sets: 1, reps: "15 minutes", description: "Burn calories and improve endurance.", difficulty: "Beginner" }
      );
    } else if (goal === "muscle_building") {
      plan.push(
        { exercise: "Deadlifts", sets: 3, reps: "10 reps", description: "Targets lower back and legs.", difficulty: "Advanced" },
        { exercise: "Shoulder Press", sets: 3, reps: "12 reps", description: "Strengthen shoulders and arms.", difficulty: "Intermediate" },
        { exercise: "Dumbbell Lunges", sets: 3, reps: "10 reps (each leg)", description: "Build leg muscles.", difficulty: "Intermediate" },
        { exercise: "Cardio: Cycling", sets: 1, reps: "20 minutes", description: "Improve cardiovascular health.", difficulty: "Beginner" }
      );
    }

    // Cool-down exercises
    plan.push({
      exercise: "Cool-down: Stretching",
      sets: 1,
      reps: "5 minutes",
      description: "Relax your muscles and improve flexibility.",
      difficulty: "Beginner",
    });

    // Add rest days based on intensity
    if (intensity === "light") {
      plan.push({ exercise: "Rest Day", sets: 0, reps: "Full day", description: "Take a break to recover.", difficulty: "N/A" });
    } else if (intensity === "moderate") {
      plan.push({ exercise: "Rest Day", sets: 0, reps: "1 day/week", description: "Rest to avoid overtraining.", difficulty: "N/A" });
    } else if (intensity === "vigorous") {
      plan.push({ exercise: "Rest Day", sets: 0, reps: "2 days/week", description: "Essential for muscle recovery.", difficulty: "N/A" });
    }

    return plan;
  };

  const handleProgressChange = (index, field, value) => {
    setProgress((prev) => ({
      ...prev,
      [index]: { ...prev[index], [field]: value },
    }));
  };

  return (
    <div className="exercise-planner-container" >
      <div className="content-wrapper">
        {/* Motivational Quote */}
        <div className="quote-container">
          <p className="quote1">
            "Success isn't always about 'greatness', it's about consistency. Consistent hard work gains success. Greatness will come."
        </p>
          <p className="quote2">  "The only bad workout is the one that didn’t happen."
          </p>
          
          <p className="quote3">"Fitness is not about being better than someone else, it's about being better than you used to be."</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="exercise-form">
          <h1>Exercise Planner</h1>
          <label>
            Experience:
            <select name="experience" required>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </label>

          <label>
            Exercise Type:
            <select name="exerciseType" required>
              <option value="with_barbell">With Barbell</option>
              <option value="without_barbell">Without Barbell</option>
            </select>
          </label>

          <label>
            Intensity Level:
            <select name="intensity" required>
              <option value="light">Light</option>
              <option value="moderate">Moderate</option>
              <option value="vigorous">Vigorous</option>
            </select>
          </label>

          <label>
            Workout Duration:
            <select name="duration" required>
              <option value="30">30 minutes</option>
              <option value="60">60 minutes</option>
              <option value="90">90 minutes</option>
            </select>
          </label>

          <label>
            Height (cm):
            <input type="number" name="height" required />
          </label>

          <label>
            Weight (kg):
            <input type="number" name="weight" required />
          </label>

          <label>
            Goal:
            <select name="goal" required>
              <option value="weight_loss">Weight Loss</option>
              <option value="muscle_building">Muscle Building</option>
              <option value="strength_training">Strength Training</option>
              <option value="endurance_improvement">Endurance Improvement</option>
              <option value="general_fitness">General Fitness</option>
            </select>
          </label>

          <label>
            Muscle Target:
            <select name="muscleTarget" required>
              <option value="full_body">Full Body</option>
              <option value="upper_body">Upper Body</option>
              <option value="lower_body">Lower Body</option>
              <option value="core">Core</option>
            </select>
          </label>

          <button type="submit">Generate Exercise Plan</button>
        </form>
      </div>

      {/* Exercise Plan Table */}
      {showPlan && (
        <div className="exercise-plan">
          <h2>Your Exercise Plan</h2>
          <table>
            <thead>
              <tr>
                <th>Exercise</th>
                <th>Description</th>
                <th>Sets</th>
                <th>Reps/Duration</th>
                <th>Difficulty</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {exercisePlan.map((exercise, index) => (
                <tr key={index}>
                  <td>{exercise.exercise}</td>
                  <td>{exercise.description}</td>
                  <td>{exercise.sets}</td>
                  <td>{exercise.reps}</td>
                  <td>{exercise.difficulty}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={progress[index]?.completed || false}
                      onChange={(e) =>
                        handleProgressChange(index, "completed", e.target.checked)
                      }
                    />
                    Completed
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExercisePlanner;