import React, { useState } from "react";
import "./DietChart.css"; // Import CSS for styling
import dietImage from "./diet-image.png"; // ✅ Import Image

const DietChart = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("gain_lean_muscle");
  const [gender, setGender] = useState("male");
  const [experience, setExperience] = useState("beginner");
  const [preference, setPreference] = useState("veg");
  const [trainingType, setTrainingType] = useState("bro_split");
  const [dietPlan, setDietPlan] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const calorieNeeds = calculateCalorieNeeds(height, weight, goal, gender, experience);
    const plan = generateDietPlan(calorieNeeds, preference, trainingType);
    setDietPlan(plan);
  };

  const calculateCalorieNeeds = (height, weight, goal, gender, experience) => {
    let baseCalories = gender === "male"
      ? 10 * weight + 6.25 * height - 5 * 25 + 5
      : 10 * weight + 6.25 * height - 5 * 25 - 161;

    baseCalories += goal === "gain_lean_muscle" ? 300 : goal === "lose_weight" ? -500 : 0;
    baseCalories *= experience === "beginner" ? 1.2 : experience === "advanced" ? 0.9 : 1;

    return Math.round(baseCalories);
  };

  const generateDietPlan = (calories, preference, trainingType) => {
    const protein = Math.round(weight * 1.8);
    const fat = Math.round((calories * 0.25) / 9);
    const carbs = Math.round((calories * 0.75) / 4);

    const meals = {
      veg: {
        breakfast: "Oats with almond milk and fruits",
        lunch: "Quinoa salad with chickpeas and veggies",
        snack: "Protein shake with peanut butter",
        dinner: "Tofu stir-fry with brown rice",
      },
      non_veg: {
        breakfast: "Scrambled eggs with whole-grain toast",
        lunch: "Grilled chicken with sweet potatoes",
        snack: "Greek yogurt with nuts",
        dinner: "Salmon with quinoa and broccoli",
      },
    };

    return { calories, protein, fat, carbs, meals: meals[preference], trainingType };
  };

  return (
    <div className="diet-chart-container">
      {/* <h1>Create Your Diet Plan</h1> */}

      {/* Wrapper for text and form */}
      <div className="content-wrapper">
        {/* Left Section: Healthy Diet Quotes */}
        <div className="quotes-section">
          <h3>Healthy Diet Quotes</h3>
          <p>"You are what you eat, so don't be fast, cheap, easy, or fake."</p>
          <p>"Eating healthy is a form of self-respect."</p>
          <p>"The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison."</p>
          
          {/* Image Below the Text */}
          <div className="diet-image">
            <img src={dietImage} alt="Healthy Diet" />
          </div>
        </div>

        {/* Right Section: Diet Plan Form */}
        <form onSubmit={handleSubmit} className="diet-form">
          <div className="form-group">
            <label>Height (cm)</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Weight (kg)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Goal</label>
            <select value={goal} onChange={(e) => setGoal(e.target.value)}>
              <option value="gain_lean_muscle">Gain Lean Muscle Mass</option>
              <option value="lose_weight">Lose Weight</option>
              <option value="maintain_weight">Maintain Weight</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Experience Level</label>
            <select value={experience} onChange={(e) => setExperience(e.target.value)}>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div className="form-group">
            <label>Food Preference</label>
            <select value={preference} onChange={(e) => setPreference(e.target.value)}>
              <option value="veg">Veg</option>
              <option value="non_veg">Non-Veg</option>
            </select>
          </div>
          <div className="form-group">
            <label>Training Type</label>
            <select value={trainingType} onChange={(e) => setTrainingType(e.target.value)}>
              <option value="bro_split">Bro Split</option>
              <option value="full_body">Full Body</option>
              <option value="push_pull_legs">Push-Pull-Legs</option>
            </select>
          </div>
          <button type="submit" className="generate-button">
            Generate Diet Plan
          </button>
        </form>
      </div>

      {/* Display Diet Plan */}
      {dietPlan && (
        <div className="diet-plan">
          <h3>Your Diet Plan</h3>
          <table>
            <thead>
              <tr>
                <th>Calories</th>
                <th>Protein (g)</th>
                <th>Fat (g)</th>
                <th>Carbs (g)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dietPlan.calories}</td>
                <td>{dietPlan.protein}</td>
                <td>{dietPlan.fat}</td>
                <td>{dietPlan.carbs}</td>
              </tr>
            </tbody>
          </table>
          <h4>Meal Plan</h4>
          <table>
            <thead>
              <tr>
                <th>Meal</th>
                <th>Food</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Breakfast</td><td>{dietPlan.meals.breakfast}</td></tr>
              <tr><td>Lunch</td><td>{dietPlan.meals.lunch}</td></tr>
              <tr><td>Snack</td><td>{dietPlan.meals.snack}</td></tr>
              <tr><td>Dinner</td><td>{dietPlan.meals.dinner}</td></tr>
            </tbody>
          </table>
          <p>Training Type: {dietPlan.trainingType}</p>
        </div>
      )}
    </div>
  );
};

export default DietChart;
