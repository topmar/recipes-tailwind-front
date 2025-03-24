'use client'

import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`)

    // Manipulating the URL query parameters
    const params = new URLSearchParams(searchParams)
    // Set the params string based on the user’s input. If the input is empty, delete it
    if (term) {
      params.set('query', term)
      params.delete('offset') //reset pagination

      //As the user types into the search bar, params.toString() translates this input into a URL-friendly format.
      replace(
        `/recipes/search/${encodeURIComponent(term)}?${params.toString()}`
      )
    } else {
      params.delete('query')
      replace(`/recipes/search`)
    }
  }, 300)

  // const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === 'Enter') {
  //     handleSearch()
  //   }
  // }

  return (
    <div className="relative w-full h-75 flex justify-center items-center mt-0 bg-[url('/images/search-bg.png')] bg-cover bg-bottom bg-no-repeat rounded-b-[95px]">
      <section className="flex flex-col gap-3 w-full max-w-sm justify-center items-center mx-auto mb-20 p-5 rounded-2xl">
        <label htmlFor="search" className="text-2xl font-bold text-background">
          Search for recipes
        </label>
        <div className="relative flex w-full">
          <Input
            id="search"
            type="text"
            placeholder={placeholder}
            onChange={(e) => {
              handleSearch(e.target.value)
            }}
            defaultValue={searchParams.get('query')?.toString()}
            // onKeyDown={handleKeyDown}
            className="relative rounded-r-none rounded-l-full bg-background border-orange-500 peer block w-full rounded-md border py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          />

          <SearchIcon className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </section>
    </div>
  )
}
