"use server";

import { Recipe, RecipesApiData } from "./interfaces";

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

// Function to get a single recipe by id
export async function fetchRecipeById(id: number) {
  const url = `${API_ENDPOINT}/${id}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error HTTP status: ${res.status}`);
  }

  const recipeData: Recipe = await res.json();

  return recipeData;
}
