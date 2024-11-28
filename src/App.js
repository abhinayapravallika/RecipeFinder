// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import IngredientInput from "./Components/IngredientInput";
import RecipeList from "./Components/RecipeList";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-transparent pt-0">
      <div className="relative bg-white p-12 rounded-lg shadow-lg flex flex-col items-center w-full max-w-8xl">
  {/* Background image */}
  <img
    src=" https://t4.ftcdn.net/jpg/08/76/85/77/360_F_876857715_ZAqWDP5buW399VdJ3iALJp0XTYynTVXO.jpg"
    alt="Food Background"
    className="absolute inset-0 w-full h-[727px] object-cover rounded-lg"
  />
  {/* Content */}
  <h1 className="text-4xl  font-bold text-white relative z-10 mt-4">
    Recipe Ideas
  </h1>
  <IngredientInput onSearch={handleSearch} />
</div>


      {/* Recipe List */}
      <RecipeList recipes={recipes} />
    </div>
    
  );
};

export default App;
