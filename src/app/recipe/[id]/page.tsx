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
      <div className="grid md:grid-cols-2 mx-3 sm:mx-10 xl:mx-56">
        <h1 className="text-4xl md:text-5xl font-bold my-10 md:col-span-2">
          {recipe.name}
        </h1>

        <figure className="w-full h-full md:col-start-2">
          <Image
            src={recipe.image}
            width={800}
            height={800}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        </figure>

        <section className="flex flex-col gap-10 p-5 md:p-10 bg-orange-50 md:row-start-2 md:col-start-1">
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

          <div className="flex gap-3">
            <StarRating rating={recipe.rating} size={25} />
            <span>{recipe.rating}</span>
          </div>

          <RecipeDescription name={recipe.name} cuisine={recipe.cuisine} />
        </section>

        <IngredientsList ingredients={recipe.ingredients} />
        <Instructions instructions={recipe.instructions} />
      </div>
    </main>
  );
}
