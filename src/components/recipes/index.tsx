import { Recipe } from '@/lib/recipes/interfaces'
import Link from 'next/link'
import RecipeListCard from './recipe-list-card'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink
} from '@/components/ui/pagination'
import RecipesPagination from './recipes-pagination'

const Recipes = async ({
  recipes,
  currentPage,
  totalRecipes,
  sortBy,
  order
}: {
  recipes: Promise<Recipe[]>
  currentPage: number
  totalRecipes: number
  sortBy?: string
  order?: string
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
    <>
      <ul className="flex flex-wrap justify-evenly gap-8 mt-4 mx-auto">
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
    </>
  )
}

export default Recipes
