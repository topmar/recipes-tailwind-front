import { fetchRecipeById } from "@/lib/recipes/actions";
import React from "react";

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const recipe = await fetchRecipeById(id);

  return (
    <main>
      <h1>{recipe.name}</h1>
    </main>
  );
}
