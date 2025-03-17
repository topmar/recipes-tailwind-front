import Recipes from '@/components/recipes'
import { fetchRecipes } from '@/lib/recipes/actions'
import { LoaderCircle } from 'lucide-react'
import { Suspense } from 'react'

const RecipesList = async () => {
  const recipes = fetchRecipes()

  const LoadingSpinner = () => (
    <LoaderCircle className="animate-spin size-20 mx-auto text-gray-500" />
  )

  return (
    <article className="mt-10 mx-10">
      <h1 className="text-4xl font-bold">All Recipes</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <Recipes recipes={recipes} />
      </Suspense>
    </article>
  )
}

export default RecipesList
