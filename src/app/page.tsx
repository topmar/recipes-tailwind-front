'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { fetchRecipeById } from '@/lib/recipes/actions'
import Link from 'next/link'
import { Recipe } from '@/lib/recipes/interfaces'
import { getRandomRecipeId } from '@/lib/utils'
import RecipeDescription from '@/components/recipe-description/recipe-description'

export default function Home() {
  const [recipeId, setRecipeId] = useState<number | null>(null)
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(false)

  const handleGenerateRecipe = async () => {
    if (loading) return
    setLoading(true)

    const randomId = getRandomRecipeId()
    setRecipeId(randomId)

    try {
      const fetchedRecipe = await fetchRecipeById(randomId)
      if (fetchedRecipe) setRecipe(fetchedRecipe)
      else console.error('Recipe not found')
    } catch (error) {
      console.error('Error fetching recipe:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main
      className="min-h-screen flex flex-col items-center pt-4 sm:pt-8 p-4 sm:p-6 md:p-8 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/food-background.jpg')" }}
    >
      <div className="w-screen -mx-4 sm:-mx-8 lg:-mx-12 flex justify-center -mt-4 sm:-mt-6">
        <h1 className="w-screen text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-orange-900 drop-shadow-md px-4 py-6 bg-orange-800/70">
          Awesome Recipe App
        </h1>
      </div>

      <Button
        onClick={handleGenerateRecipe}
        className="mt-6 px-6 sm:px-8 py-4 sm:py-6 text-lg sm:text-2xl bg-orange-800/50 text-white rounded-xl shadow-xl transition-all hover:bg-orange-800/70 hover:scale-105"
      >
        Give me some food. Click on me!
      </Button>

      {loading && (
        <p className="text-orange-700 font-medium animate-pulse">Loading...</p>
      )}

      {recipe && recipeId && !loading && (
        <Link
          href={`/recipe/${recipeId}`}
          className="w-full max-w-5xl mt-6 transform transition duration-300 hover:scale-105"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-3 sm:mx-10 xl:mx-20 bg-white rounded-lg overflow-hidden shadow-lg">
            <figure className="w-full">
              <Image
                src={recipe?.image || '/images/placeholder.jpg'}
                width={500}
                height={500}
                alt={recipe?.name || 'Recipe Image'}
                className="w-full h-full object-cover"
                priority
              />
            </figure>
            <section className="flex flex-col p-4 sm:p-6 md:p-8 bg-orange-50">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                {recipe?.name || 'Recipe Name'}
              </h1>
              <RecipeDescription name={recipe.name} cuisine={recipe.cuisine} />
            </section>
          </div>
        </Link>
      )}
    </main>
  )
}
