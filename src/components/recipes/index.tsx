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
      {
        // NOTE: It seems that shadcn uses the next Link component, so there is no 'disabled' property on it.
        // setting aria-disabled and using Tailwind classes conditionally seems to be an okay workaround.
      }
      <Pagination className="my-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={createPageLink(Math.max(currentPage - 1, 1))}
              aria-disabled={currentPage === 1}
              className={
                currentPage === 1 ? 'pointer-events-none opacity-50' : ''
              }
            />
          </PaginationItem>

          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href={createPageLink(i + 1)}
                isActive={currentPage === i + 1}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href={createPageLink(Math.min(currentPage + 1, totalPages))}
              aria-disabled={currentPage === totalPages}
              className={
                currentPage === totalPages
                  ? 'pointer-events-none opacity-50'
                  : ''
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default Recipes
