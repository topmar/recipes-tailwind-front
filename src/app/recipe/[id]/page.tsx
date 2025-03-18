import Image from "next/image";
import IngredientsList from "@/components/ingredients-list/ingredients-list";
import Instructions from "@/components/instructions/instructions";
import { fetchRecipeById } from "@/lib/recipes/actions";
import StarRating from "@/components/ui/rating";
import CategoryAndMealTypeTags from "@/components/category-and-mealtype-tags/category-and-mealtypetags";
import { Clock, CookingPot, Goal, UsersRound, Utensils } from "lucide-react";

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
          <div className="flex flex-col gap-3">
            <p className="flex gap-2">
              <Clock /> {recipe.prepTimeMinutes} mins prep time
            </p>
            <p className="flex gap-2">
              <CookingPot /> {recipe.cookTimeMinutes} mins cook time
            </p>
            <p className="flex gap-2">
              <Utensils /> {recipe.servings} servings
            </p>
            <p className="flex gap-2">
              <Goal /> {recipe.difficulty} level
            </p>
          </div>

          <CategoryAndMealTypeTags
            tags={recipe.tags}
            mealType={recipe.mealType}
          />

          <StarRating rating={recipe.rating} />
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
