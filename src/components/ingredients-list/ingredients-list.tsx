import React from "react";

export default function IngredientsList({
  ingredients,
}: {
  ingredients: string[];
}) {
  return (
    <section className="bg-orange-100 p-10">
      <h2 className="text-3xl font-bold mb-5">Ingredients</h2>
      <ul className="list-disc pl-4">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </section>
  );
}
