"use client";
import SearchBar from "@/components/search-bar";
import Button from "@/components/click-on-me-btn";
import { useState } from "react";
import { fetchRecipeById } from "@/lib/recipes/actions";
import Link from "next/link";
import RecipeListCard from "@/components/recipes/recipe-list-card";
import { Recipe } from "@/lib/recipes/interfaces";

export default function Home() {
  const [recipeId, setRecipeId] = useState<number | null>(null);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(false);

  const generateRandomId = async () => {
    if (loading) return;
    setLoading(true);

    const randomId = Math.floor(Math.random() * 50) + 1;
    setRecipeId(randomId);

    try {
      const fetchedRecipe = await fetchRecipeById(randomId);
      if (fetchedRecipe) {
        setRecipe(fetchedRecipe);
      } else {
        console.error("Recipe not found");
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-6 min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/food-background.jpg')" }}>      
      <h1 className="text-4xl font-extrabold text-orange-800 drop-shadow-md px-4 py-2 rounded-lg" style={{ backgroundColor: "rgba(255, 102, 0, 0.5)" }}>
        Awesome Recipe App
      </h1>
      <Button 
        text="Give me some food. Click on me!" 
        onClick={generateRandomId}
      />

      {loading && <p className="text-orange-700 font-medium animate-pulse">Loading...</p>}

      {recipe && recipeId && !loading && (
        <Link href={`/recipe/${recipeId}`} className="block transform transition duration-300 hover:scale-105">
          <RecipeListCard recipe={recipe} />
        </Link>
      )}
    </div>
  );
}
