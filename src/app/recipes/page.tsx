import { LoadingSpinner } from '@/components/loading-spinner/loading-spinner'
import Recipes from '@/components/recipes'
import { SearchRecipes } from '@/components/search/search-recipes'
import SortDropdown from '@/components/ui/sort-dropdown'
import {
  fetchAllRecipes,
  fetchRecipes,
  fetchSearchResults
} from '@/lib/recipes/actions'
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

  // query from search
  const query = params.query ? String(params.query) : ''

  let recipes
  let totalRecipes

  if (query) {
    recipes = await fetchSearchResults(query, page, limit, sortBy, order) // Get search result based on query
    totalRecipes = recipes.length
  } else {
    recipes = await fetchRecipes(page, limit, sortBy, order) // If no query, show all recipes
    totalRecipes = await fetchAllRecipes()
  }

  return (
    <>
      <SearchRecipes placeholder="Search recipes..." />
      <article className="mt-10 mx-10">
        {/* Dynamic heading depending on search results or all recipes are shown */}
        <h1 className="text-4xl font-semibold text-center">
          {query
            ? `${totalRecipes} search result${
                totalRecipes === 1 ? '' : 's'
              } for ${query}`
            : 'All Recipes'}
        </h1>
        <section className="flex justify-center sm:justify-end mt-4 max-w-[1200px] mx-auto">
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
