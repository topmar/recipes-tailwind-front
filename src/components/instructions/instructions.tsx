import React from "react";

export default function Instructions({
  instructions,
}: {
  instructions: string[];
}) {
  return (
    <section className="p-10 bg-orange-50">
      <h2 className="text-3xl font-bold mb-5">Instructions</h2>
      <ol className="list-decimal pl-4">
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </section>
  );
}
