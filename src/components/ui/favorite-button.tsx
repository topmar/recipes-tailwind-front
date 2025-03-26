'use client'

import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'

interface FavoriteButtonProps {
  recipeId: number
}

const FavoriteButton = ({ recipeId }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '{}')
    setIsFavorite(savedFavorites[recipeId] || false)
  }, [recipeId])

  const handleToggleFavorite = (event: React.MouseEvent) => {
    event.stopPropagation() // Prevents Link navigation
    setIsFavorite((prev) => {
      const newFavoriteState = !prev
      const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '{}') as Record<string, boolean>
      savedFavorites[recipeId] = newFavoriteState
      localStorage.setItem('favorites', JSON.stringify(savedFavorites))
      return newFavoriteState
    })
  }

  return (
    <button onClick={handleToggleFavorite} className="text-red-500">
      <Heart fill={isFavorite ? 'red' : 'none'} className="w-6 h-6" />
    </button>
  )
}

export default FavoriteButton
