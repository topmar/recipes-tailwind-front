import { ChefHat, Soup } from "lucide-react";
import React from "react";

export default function Instructions({
  instructions,
}: {
  instructions: string[];
}) {
  return (
    <section className="p-10 bg-orange-50">
      <h2 className="flex items-center gap-3 text-3xl font-bold mb-5">
        <ChefHat />
        Instructions
      </h2>
      <ol className="list-decimal pl-12 flex flex-col gap-3">
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <p className="flex items-center gap-3 text-3xl font-bold my-5">
        <Soup /> Enjoy!
      </p>
    </section>
  );
}
