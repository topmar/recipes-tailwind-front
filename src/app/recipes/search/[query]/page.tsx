import RecipeListCard from '@/components/recipes/recipe-list-card'
import { SearchInput } from '@/components/search-input/search-input'
import { fetchSearchResults } from '@/lib/recipes/actions'
import { Recipe } from '@/lib/recipes/interfaces'
import Link from 'next/link'

export default async function SearchResultPage({
  params
}: {
  params: Promise<{ query: string }>
}) {
  const query = (await params).query
  const recipes = await fetchSearchResults(query)

  return (
    <main>
      <div className="grid gap-10 mx-3 sm:mx-10 xl:mx-56">
        <SearchInput />
        <h1 className="text-4xl font-bold text-center md:text-left">
          Search results for {query}
        </h1>

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
        ) : (
          <p>No recipes found for {query}.</p>
        )}
      </div>
    </main>
  )
}
