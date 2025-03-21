import { ChefHat, Soup } from 'lucide-react'
import React from 'react'

export default function Instructions({
  instructions
}: {
  instructions: string[]
}) {
  return (
    <section className="p-5 md:p-10 bg-orange-50">
      <h2 className="flex items-center gap-3 text-3xl font-bold mb-5">
        <ChefHat size={30} />
        Instructions
      </h2>
      <ol className="list-decimal pl-10 flex flex-col gap-3 border-l-4 border-dotted">
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <p className="flex items-center gap-3 text-3xl font-bold my-5">
        <Soup size={30} /> Enjoy!
      </p>
    </section>
  )
}
