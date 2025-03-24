import { fetchSearchResults } from '@/lib/recipes/actions'
import { Recipe } from '@/lib/recipes/interfaces'
import Link from 'next/link'
import RecipeListCard from '../recipes/recipe-list-card'

export default async function SearchResult({
  query,
  currentPage
}: {
  query: string
  currentPage: number
}) {
  const limit = 6
  const recipes = await fetchSearchResults(query, currentPage, limit)

  return (
    <>
      {recipes?.length > 0 ? (
        <h1 className="text-4xl font-bold text-center md:text-left">
          {recipes.length} Search results for {query}
        </h1>
      ) : (
        <h1 className="text-4xl font-bold text-center md:text-left">
          No recipes found for {query}.
        </h1>
      )}
      {recipes?.length > 0 ? (
        <ul className="grid justify-center md:grid-cols-3 gap-8">
          {recipes.map((recipe: Recipe) => (
            <li key={recipe.id}>
              <Link href={`/recipe/${recipe.id}`}>
                <RecipeListCard recipe={recipe} />
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}
