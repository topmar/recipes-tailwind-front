import { LoadingSpinner } from '@/components/loading-spinner/loading-spinner'
import Recipes from '@/components/recipes'
import { SearchRecipes } from '@/components/search/search-recipes'
import SortDropdown from '@/components/ui/sort-dropdown'
import { fetchRecipes, fetchSearchResults } from '@/lib/recipes/actions'
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

  // const recipes = fetchRecipes(page, limit, sortBy, order)

  // query from search
  const query = params.query ? String(params.query) : ''

  let recipes

  if (query) {
    recipes = await fetchSearchResults(query) // Get search result based on query
  } else {
    recipes = await fetchRecipes(page, limit, sortBy, order) // If no query, show all recipes
  }

  const totalRecipes = 50 // All recipes from DummyJSON

  return (
    <>
      <SearchRecipes placeholder="Search recipes..." />
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
            query={query}
          />
        </Suspense>
      </article>
    </>
  )
}

export default RecipesList
