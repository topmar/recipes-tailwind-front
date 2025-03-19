import { NotebookPen } from 'lucide-react'
import React from 'react'

export default function IngredientsList({
  ingredients
}: {
  ingredients: string[]
}) {
  return (
    <section className="p-5 md:p-10 bg-orange-100">
      <h2 className="flex items-center gap-3 text-3xl font-bold mb-5">
        <NotebookPen /> Ingredients
      </h2>
      <ul className="list-none pl-8 flex flex-col gap-3">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="before:content-['○'] before:mr-2">
            {ingredient}
          </li>
        ))}
      </ul>
    </section>
  )
}
