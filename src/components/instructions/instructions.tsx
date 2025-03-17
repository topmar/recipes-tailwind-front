import React from "react";

export default function Instructions({
  instructions,
}: {
  instructions: string[];
}) {
  return (
    <>
      <h2 className="text-xl">Ingredients</h2>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </>
  );
}
