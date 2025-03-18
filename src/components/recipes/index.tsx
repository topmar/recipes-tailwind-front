import { Recipe } from '@/lib/recipes/interfaces'
import Link from 'next/link'
import RecipeListCard from './recipe-list-card'

const Recipes = async ({ recipes }: { recipes: Promise<Recipe[]> }) => {
  const allRecipes = await recipes
  return (
    <ul className="flex flex-wrap justify-evenly gap-8 mt-4 mx-auto">
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
