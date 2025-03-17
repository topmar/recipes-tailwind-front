import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Recipe } from '@/lib/recipes/interfaces'
import Image from 'next/image'
import StarRating from '../ui/rating'

const RecipeListCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Card className="flex flex-col px-4 h-full sm:flex-row gap-2 text-center sm:text-left justify-center sm:justify-normal">
      <div>
        <Image
          className="rounded-sm mx-auto sm:mx-0 h-48 w-48 object-cover"
          src={recipe.image}
          alt={recipe.name}
          height={150}
          width={150}
        />
      </div>
      <div className="flex flex-col justify-center sm:justify-normal">
        <CardTitle className="text-3xl">{recipe.name}</CardTitle>
        <div className="hidden sm:contents">
          <StarRating rating={recipe.rating} />
        </div>
        <CardDescription>{recipe.cuisine}</CardDescription>
        <CardDescription>
          Cook time: {recipe.cookTimeMinutes} minutes
        </CardDescription>
      </div>
    </Card>
  )
}

export default RecipeListCard
