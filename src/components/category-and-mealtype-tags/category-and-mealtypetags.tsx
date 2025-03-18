import React from "react";

export default function CategoryAndMealTypeTags({
  tags,
  mealType,
}: {
  tags: string[];
  mealType: string[];
}) {
  return (
    <section className="flex gap-5">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="border-orange-950 border-2 rounded-full px-5"
        >
          {tag}
        </div>
      ))}

      {mealType.map((meal, index) => (
        <div
          key={index}
          className="border-orange-950 border-2 rounded-full px-5"
        >
          {meal}
        </div>
      ))}
    </section>
  );
}
