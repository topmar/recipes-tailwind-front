import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { Recipe } from '@/lib/recipes/interfaces'
import Image from 'next/image'
import StarRating from '../ui/rating'
import { Clock, Flag } from 'lucide-react'

const RecipeListCard = ({ recipe }: { recipe: Recipe }) => {
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
      <CardFooter className="px-4 mb-4 mt-16 flex gap-2">
        <StarRating rating={recipe.rating} size={24} />
        <span>{recipe.rating}</span>
      </CardFooter>
    </Card>
  )
}

export default RecipeListCard
