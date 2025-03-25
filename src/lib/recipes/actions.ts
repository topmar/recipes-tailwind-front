'use server'

import { Recipe, RecipesApiData } from './interfaces'

const API_ENDPOINT = 'https://dummyjson.com/recipes'

// Fetching all recipes from dummyJSON without pagination
export async function fetchAllRecipes() {
  const limit = 50
  const res = await fetch(`${API_ENDPOINT}?limit=${limit}`)
  const data = await res.json()
  console.log(data.total)
  return data.total // Total amount of recipes
}

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

// Function to fetch searchresults
export async function fetchSearchResults(
  query: string,
  page?: number,
  limit?: number
) {
  const skip = ((page ?? 1) - 1) * (limit ?? 10)
  const url = `${API_ENDPOINT}/search?q=${query}&limit=${limit}&skip=${skip}`

  // if (!query.trim()) return []

  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Error HTTP status: ${res.status}`)

    const data = await res.json()
    return data.recipes
  } catch (error) {
    console.error('Error when try fetching data:', error)
    return []
  }
}
