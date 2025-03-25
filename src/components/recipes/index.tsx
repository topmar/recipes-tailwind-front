import { Recipe } from '@/lib/recipes/interfaces'
import Link from 'next/link'
import RecipeListCard from './recipe-list-card'
import RecipesPagination from './recipes-pagination'

const Recipes = async ({
  recipes,
  currentPage,
  totalRecipes,
  sortBy,
  order,
  query
}: {
  recipes: Promise<Recipe[]>
  currentPage: number
  totalRecipes: number
  sortBy?: string
  order?: string
  query?: string
}) => {
  const allRecipes = await recipes

  const limit = 9
  const totalPages = Math.ceil(totalRecipes / limit)

  // Function to check if sortBy and orderParams exist, and add them to the query string if they do
  const createPageLink = (page: number) => {
    const params = new URLSearchParams()
    params.set('page', page.toString()) // Update page number

    // Preserve sorting params if they exist
    if (sortBy) params.set('sortBy', sortBy)
    if (order) params.set('order', order)

    return `/recipes?${params.toString()}`
  }
  return (
    <div className="grid gap-10 justify-center mt-10 mx-3 sm:mx-10 xl:mx-20">
      <ul className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/recipe/${recipe.id}`}>
              <RecipeListCard recipe={recipe} />
            </Link>
          </li>
        ))}
      </ul>
      <RecipesPagination
        currentPage={currentPage}
        totalPages={totalPages}
        createPageLink={createPageLink}
      />
    </div>
  )
}

export default Recipes
