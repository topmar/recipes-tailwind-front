import { LoadingSpinner } from '@/components/loading-spinner/loading-spinner'
import Recipes from '@/components/recipes'
import { Search } from '@/components/search/search'
import SortDropdown from '@/components/ui/sort-dropdown'
import { fetchRecipes } from '@/lib/recipes/actions'
import { Suspense } from 'react'

const RecipesList = async ({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const params = await searchParams
  const page = Number(params.page) || 1
  const limit = 9
  const sortBy = Array.isArray(params.sortBy)
    ? params.sortBy[0]
    : params.sortBy || undefined
  const order = Array.isArray(params.order)
    ? params.order[0]
    : params.order || undefined
  const recipes = fetchRecipes(page, limit, sortBy, order)
  const totalRecipes = 50 // All recipes from DummyJSON

  return (
    <>
      <Search placeholder="Search recipes..." />
      <article className="mt-10 mx-10">
        <h1 className="text-4xl font-bold">All Recipes</h1>
        <section className="flex justify-end mt-4 mx-1">
          <SortDropdown />
        </section>
        <Suspense fallback={<LoadingSpinner />}>
          <Recipes
            recipes={recipes}
            currentPage={page}
            totalRecipes={totalRecipes}
            sortBy={sortBy}
            order={order}
          />
        </Suspense>
      </article>
    </>
  )
}

export default RecipesList
