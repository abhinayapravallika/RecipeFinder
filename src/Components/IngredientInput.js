import React, { useState } from "react";
const IngredientInput = ({ onSearch }) => {
  const [ingredient, setIngredient] = useState("");

  const handleSearch = () => {
    if (ingredient.trim()) {
      onSearch(ingredient.trim());
    }
  };

  return (
    <div className="relative flex mt-6 z-10">
      <input
        type="text"
        className="w-64 border border-gray-300 p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Enter an ingredient (e.g.,Carrot)"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-purple-600 text-white px-6 rounded-r-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Search
      </button>
    </div>
  );
};

export default IngredientInput;
