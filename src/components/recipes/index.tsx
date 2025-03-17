import { Recipe } from '@/lib/recipes/interfaces'
import Link from 'next/link'
import RecipeListCard from './recipe-list-card'

const Recipes = async ({ recipes }: { recipes: Promise<Recipe[]> }) => {
  const allRecipes = await recipes
  return (
    <ul className="flex flex-col flex-wrap gap-8 mt-4 sm:grid sm:grid-cols-2">
      {allRecipes.map((recipe) => (
        <li key={recipe.id}>
          <Link href={`/recipe/${recipe.id}`}>
            <RecipeListCard recipe={recipe} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Recipes
