import React from 'react'

export default function RecipeDescription({
  name,
  cuisine
}: {
  name: string
  cuisine: string
}) {
  return (
    <p>
      Recipe for {name} when you're craving something from the {cuisine}{' '}
      cuisine. Let the culinary inspiration flow.
    </p>
  )
}
