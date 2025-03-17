"use server";

import { Recipe, RecipesApiData } from "./interfaces";

// TODO: when adding pagination - update this endpoint with limit and skip. Read dummyJSON docs
const API_ENDPOINT = "https://dummyjson.com/recipes";

// Function to fetch all recipes
export async function fetchRecipes(): Promise<Recipe[]> {
  const res = await fetch(API_ENDPOINT);

  if (!res.ok) {
    throw new Error(`Error HTTP status: ${res.status}`);
  }

  const data: RecipesApiData = await res.json();

  if (!Array.isArray(data.recipes)) {
    throw new Error("invalid data format received");
  }

  // Add boolean isFavourite
  const updatedRecipes: Recipe[] = data.recipes.map((recipe) => ({
    ...recipe,

    isFavourite: Boolean(false),
  }));

  return updatedRecipes;
}
