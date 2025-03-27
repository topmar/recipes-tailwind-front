import Image from 'next/image'
import { fetchRecipeById } from '@/lib/recipes/actions'
import IngredientsList from '@/components/ingredients-list/ingredients-list'
import Instructions from '@/components/instructions/instructions'
import StarRating from '@/components/ui/rating'
import CategoryAndMealTypeTags from '@/components/category-and-mealtype-tags/category-and-mealtypetags'
import RecipeDescription from '@/components/recipe-description/recipe-description'
import RecipeInfo from '@/components/recipe-info/recipe-info'
import FavoriteButton from '@/components/ui/favorite-button'

export default async function RecipeDetailPage({
  params
}: {
  params: Promise<{ id: number }>
}) {
  const id = (await params).id
  const recipe = await fetchRecipeById(id)

  return (
    <main>
      {/* Page wrapper */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-between items-center md:col-span-2 my-10">
          <h1 className="text-4xl md:text-5xl font-semibold my-10 md:col-span-2">
            {recipe.name}
          </h1>
          <FavoriteButton recipeId={recipe.id} />
        </div>

        {/* Recipe info section */}
        <section className="flex flex-col gap-10 p-5 md:p-10 bg-orange-50 dark:bg-orange-900 md:row-start-2 md:col-start-1 h-fit">
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

        {/* Image */}
        <figure className="w-full overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
            priority
          />
        </figure>

        {/* Ingredients */}
        <IngredientsList ingredients={recipe.ingredients} />

        {/* Instructions */}
        <Instructions instructions={recipe.instructions} />
      </div>
    </main>
  )
}
