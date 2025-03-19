import Recipes from '@/components/recipes'
import { fetchRecipes } from '@/lib/recipes/actions'
import { LoaderCircle } from 'lucide-react'
import { Suspense } from 'react'

const RecipesList = async ({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const params = await searchParams
  const page = Number(params.page) || 1
  const limit = 9
  const recipes = fetchRecipes(page, limit)
  const totalRecipes = 50 // All recipes from DummyJSON

  const LoadingSpinner = () => (
    <LoaderCircle className="animate-spin size-20 mx-auto text-gray-500" />
  )

  return (
    <article className="mt-10 mx-10">
      <h1 className="text-4xl font-bold">All Recipes</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <Recipes
          recipes={recipes}
          currentPage={page}
          totalRecipes={totalRecipes}
        />
      </Suspense>
    </article>
  )
}

export default RecipesList
