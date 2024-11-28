import React from "react";

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="border border-gray-200 rounded-lg shadow-md bg-white overflow-hidden transform transition-transform hover:scale-105"
        >
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">{recipe.strMeal}</h2>
            <a
              href={`https://www.themealdb.com/meal/${recipe.idMeal}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 mt-2 inline-block hover:underline"
            >
              View Recipe
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
