import { Star } from 'lucide-react'

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <Star
          color="oklch(85.86% 0.1789 87)"
          size={16}
          key={index}
          strokeWidth={1}
          fill={star <= rating ? 'oklch(85.86% 0.1789 87)' : 'none'}
        />
      ))}
    </div>
  )
}

export default StarRating
