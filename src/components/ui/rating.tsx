import { Star } from 'lucide-react'

const StarRating = ({ rating, size }: { rating: number; size: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <Star
          color="oklch(85.86% 0.1789 87)"
          size={size}
          key={index}
          strokeWidth={1}
          fill={star <= Math.round(rating) ? 'oklch(85.86% 0.1789 87)' : 'none'}
        />
      ))}
    </div>
  )
}

export default StarRating
