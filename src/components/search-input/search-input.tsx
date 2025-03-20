'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { fetchSearchResults } from '@/lib/recipes/actions'

export function SearchInput() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const router = useRouter()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSearch = async () => {
    const data = await fetchSearchResults(query)
    router.push(`/recipes/search/${query}`)
    setResults(data)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="relative w-full h-75 flex justify-center items-center mt-0 bg-[url('/images/search-bg.png')] bg-cover bg-bottom bg-no-repeat rounded-b-[95px]">
      <section className="flex flex-col gap-3 w-full max-w-sm justify-center items-center mx-auto mb-20 p-5 rounded-2xl">
        <label htmlFor="search" className="text-2xl font-bold text-background">
          Search for recipes
        </label>
        <div className="flex w-full">
          <Input
            id="search"
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Search recipe..."
            className="rounded-r-none rounded-l-full bg-background border-orange-500"
          />

          <Button
            onClick={handleSearch}
            type="submit"
            className="rounded-l-none rounded-r-full cursor-pointer bg-orange-500"
            aria-label="Search for recipes"
          >
            <Search />
          </Button>
        </div>
      </section>
    </div>
  )
}
