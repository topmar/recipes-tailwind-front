'use client'

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
    <section className="flex flex-col gap-3 w-full max-w-sm items-center mx-auto mt-10 mb-20">
      <label htmlFor="search" className="text-2xl font-bold">
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
          className="rounded-r-none rounded-l-full"
        />

        <Button
          onClick={handleSearch}
          type="submit"
          className="rounded-l-none rounded-r-full"
        >
          <Search />
        </Button>
      </div>
    </section>
  )
}
