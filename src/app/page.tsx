'use client'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { fetchRecipeById } from '@/lib/recipes/actions'
import Link from 'next/link'
import RecipeListCard from '@/components/recipes/recipe-list-card'
import { Recipe } from '@/lib/recipes/interfaces'
import { getRandomRecipeId } from '@/lib/utils' // Import the helper function

export default function Home() {
  const [recipeId, setRecipeId] = useState<number | null>(null)
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(false)

  const handleGenerateRecipe = async () => {
    if (loading) return
    setLoading(true)

    const randomId = getRandomRecipeId() // Using the helper function
    setRecipeId(randomId)

    try {
      const fetchedRecipe = await fetchRecipeById(randomId)
      if (fetchedRecipe) {
        setRecipe(fetchedRecipe)
      } else {
        console.error('Recipe not found')
      }
    } catch (error) {
      console.error('Error fetching recipe:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="flex flex-col items-center p-8 space-y-6 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/food-background.jpg')" }}
    >
      <h1
        className="text-4xl font-extrabold text-orange-800 drop-shadow-md px-4 py-2 rounded-lg"
        style={{ backgroundColor: 'rgba(255, 102, 0, 0.5)' }}
      >
        Awesome Recipe App
      </h1>

      <Button
        onClick={handleGenerateRecipe}
        className="px-8 py-4 text-2xl bg-orange-800/50 text-white rounded-xl shadow-xl transition-all hover:bg-orange-800/70 hover:scale-105"
      >
        Give me some food. Click on me!
      </Button>

      {loading && (
        <p className="text-orange-700 font-medium animate-pulse">Loading...</p>
      )}

      {recipe && recipeId && !loading && (
        <Link
          href={`/recipe/${recipeId}`}
          className="block transform transition duration-300 hover:scale-105"
        >
          <RecipeListCard recipe={recipe} />
        </Link>
      )}
    </div>
  )
}
