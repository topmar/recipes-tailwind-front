import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getRandomRecipeId = (max: number = 50): number => {
  return Math.floor(Math.random() * max) + 1
}
