import React from "react";

export default function IngredientsList({
  ingredients,
}: {
  ingredients: string[];
}) {
  return (
    <>
      <h2 className="text-xl">Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </>
  );
}
