'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { fetchRecipeById } from '@/lib/recipes/actions'
import Link from 'next/link'
import { Recipe } from '@/lib/recipes/interfaces'
import { getRandomRecipeId } from '@/lib/utils'
import RecipeDescription from '@/components/recipe-description/recipe-description'
import { LoadingSpinner } from '@/components/loading-spinner/loading-spinner'

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
      className="relative min-h-screen flex flex-col items-center pt-4 sm:pt-8 p-4 sm:p-6 md:p-8 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/food-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="w-screen text-center text-3xl sm:text-4xl text-white lg:text-5xl font-semibold drop-shadow-md px-4 py-6 mt-8">
          Welcome to Awesome Recipes!
        </h1>
        <p className="text-white text-lg text-center m-8 max-w-96">
          We hope you enjoy our delicious recipes. Need some inpiration? Click
          on the button to get a random recipe!
        </p>
        <Button
          onClick={handleGenerateRecipe}
          className="mt-6 px-6 sm:px-8 py-4 sm:py-6 text-lg sm:text-2xl bg-orange-700/50 text-white rounded-xl shadow-xl transition-all hover:bg-orange-800/70 hover:scale-105 hover:cursor-pointer"
        >
          Give me some food!
        </Button>
      </div>
      {loading && <LoadingSpinner />}
      {recipe && recipeId && !loading && (
        <Link
          href={`/recipe/${recipeId}`}
          className="w-full max-w-5xl mt-6 transform transition duration-300 hover:scale-105"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 mx-3 sm:mx-10 xl:mx-20 rounded-lg overflow-hidden shadow-lg bg-white">
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
            <section className="flex flex-col p-4 sm:p-6 md:p-8 bg-orange-50 dark:bg-orange-950">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {recipe?.name || 'Recipe Name'}
              </h2>
              <RecipeDescription name={recipe.name} cuisine={recipe.cuisine} />
              <span className="text-blue-600 underline hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-500 transition-colors cursor-pointer">
                Read More
              </span>
            </section>
          </div>
        </Link>
      )}
    </main>
  )
}
