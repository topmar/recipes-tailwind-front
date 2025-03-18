import { NotebookPen } from "lucide-react";
import React from "react";

export default function IngredientsList({
  ingredients,
}: {
  ingredients: string[];
}) {
  return (
    <section className="bg-orange-100 p-10">
      <h2 className="flex items-center gap-3 text-3xl font-bold mb-5">
        <NotebookPen /> Ingredients
      </h2>
      <ul className="list-disc pl-12 flex flex-col gap-3">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </section>
  );
}
