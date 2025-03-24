'use client'
import { useState, useEffect } from 'react'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Recipe } from '@/lib/recipes/interfaces'
import Image from 'next/image'
import StarRating from '../ui/rating'
import { Clock, Flag, Heart } from 'lucide-react'

const RecipeListCard = ({ recipe }: { recipe: Recipe }) => {
  // Retrieve the favorite state from localStorage or default to false
  const getFavoriteState = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '{}')
    return savedFavorites[recipe.id] || false
  }

  const [isFavorite, setIsFavorite] = useState(getFavoriteState)

  useEffect(() => {
    // Ensure localStorage is up to date when component mounts
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '{}')
    savedFavorites[recipe.id] = isFavorite
    localStorage.setItem('favorites', JSON.stringify(savedFavorites))
  }, [isFavorite, recipe.id])

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => {
      const newFavoriteState = !prev

      // Update localStorage with new favorite state
      const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '{}')
      savedFavorites[recipe.id] = newFavoriteState
      localStorage.setItem('favorites', JSON.stringify(savedFavorites))

      return newFavoriteState
    })
  }

  return (
    <Card className="py-0 max-w-96 justify-between h-full">
      <Image
        src={recipe.image}
        alt={recipe.name}
        height={400}
        width={400}
        className="rounded-t-xl object-cover"
      />
      <CardTitle className="text-3xl mx-4 text-wrap">{recipe.name}</CardTitle>
      <CardContent className="flex flex-row justify-between px-4">
        <div className="flex flex-row gap-2">
          <Clock /> {recipe.cookTimeMinutes} <span>min</span>
        </div>
        <div className="flex flex-row gap-2">
          <Flag /> {recipe.cuisine}
        </div>
      </CardContent>
      <CardFooter className="px-4 mb-4 mt-16 flex justify-between items-center">
        <div className="flex gap-2">
          <StarRating rating={recipe.rating} size={24} />
          <span>{recipe.rating}</span>
        </div>
        <Button variant="ghost" onClick={handleToggleFavorite} className="text-red-500">
          <Heart fill={isFavorite ? 'red' : 'none'} className="w-6 h-6" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default RecipeListCard



