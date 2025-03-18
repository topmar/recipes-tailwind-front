import Image from "next/image";
import { fetchRecipeById } from "@/lib/recipes/actions";
import IngredientsList from "@/components/ingredients-list/ingredients-list";
import Instructions from "@/components/instructions/instructions";
import StarRating from "@/components/ui/rating";
import CategoryAndMealTypeTags from "@/components/category-and-mealtype-tags/category-and-mealtypetags";
import RecipeDescription from "@/components/recipe-description/recipe-description";
import RecipeInfo from "@/components/recipe-info/recipe-info";

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
      <div className="grid grid-cols-2 mx-56">
        <h1 className="text-5xl font-bold col-span-2 my-10">{recipe.name}</h1>

        <section className="flex flex-col gap-5 bg-orange-50 p-10">
          <RecipeInfo
            prepTimeMinutes={recipe.prepTimeMinutes}
            cookTimeMinutes={recipe.cookTimeMinutes}
            servings={recipe.servings}
            difficulty={recipe.difficulty}
          />

          <CategoryAndMealTypeTags
            tags={recipe.tags}
            mealType={recipe.mealType}
          />

          <StarRating rating={recipe.rating} />

          <RecipeDescription name={recipe.name} cuisine={recipe.cuisine} />
        </section>

        <Image
          src={recipe.image}
          width={600}
          height={200}
          alt={recipe.name}
        ></Image>

        <IngredientsList ingredients={recipe.ingredients} />
        <Instructions instructions={recipe.instructions} />
      </div>
    </main>
  );
}
