import Image from "next/image";
import IngredientsList from "@/components/ingredients-list/ingredients-list";
import Instructions from "@/components/instructions/instructions";
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
      {/* Page wrapper */}
      <div className="container mx-[10rem] mt-5">
        <h1 className="text-2xl">{recipe.name}</h1>
        <section>
          <IngredientsList ingredients={recipe.ingredients} />
        </section>
        <section>
          <Instructions instructions={recipe.instructions} />
        </section>
      </div>
    </main>
  );
}
