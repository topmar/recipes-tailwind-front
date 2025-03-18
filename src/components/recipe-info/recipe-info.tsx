import { Clock, CookingPot, Goal, Utensils } from "lucide-react";
import React from "react";

export default function RecipeInfo({
  prepTimeMinutes,
  cookTimeMinutes,
  servings,
  difficulty,
}: {
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
}) {
  return (
    <section className="flex flex-col gap-3">
      <p className="flex gap-2">
        <Clock /> {prepTimeMinutes} mins prep time
      </p>
      <p className="flex gap-2">
        <CookingPot /> {cookTimeMinutes} mins cook time
      </p>
      <p className="flex gap-2">
        <Utensils /> {servings} servings
      </p>
      <p className="flex gap-2">
        <Goal /> {difficulty} level
      </p>
    </section>
  );
}
