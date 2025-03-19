import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export function SearchInput() {
  return (
    <section className="flex flex-col gap-3 w-full max-w-sm items-center mx-auto">
      <label htmlFor="search" className="text-2xl font-bold">
        Search for recipes
      </label>
      <div className="flex w-full">
        <Input
          id="search"
          type="search"
          placeholder="Search recipe..."
          className="rounded-r-none rounded-l-full"
        />

        <Button type="submit" className="rounded-l-none rounded-r-full">
          <Search />
        </Button>
      </div>
    </section>
  )
}
