'use server'

import { Recipe, RecipesApiData } from './interfaces'

const API_ENDPOINT = 'https://dummyjson.com/recipes'

// Function to fetch all recipes
// with limit and skip params to support pagination. Default limit is 9

export async function fetchRecipes(
  page: number,
  limit: number = 9,
  sortBy: string = '',
  order: string = ''
): Promise<Recipe[]> {
  const skip = (page - 1) * limit

  const res = await fetch(
    `${API_ENDPOINT}?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`
  )

  if (!res.ok) {
    throw new Error(`Error HTTP status: ${res.status}`)
  }

  const data: RecipesApiData = await res.json()

  if (!Array.isArray(data.recipes)) {
    throw new Error('invalid data format received')
  }

  // Add boolean isFavourite
  const updatedRecipes: Recipe[] = data.recipes.map((recipe) => ({
    ...recipe,

    isFavourite: Boolean(false)
  }))

  return updatedRecipes
}

// Function to get a single recipe by id
export async function fetchRecipeById(id: number) {
  const url = `${API_ENDPOINT}/${id}`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Error HTTP status: ${res.status}`)
  }

  const recipeData: Recipe = await res.json()

  return recipeData
}
