import { LoadingSpinner } from '@/components/loading-spinner/loading-spinner'
import { Search } from '@/components/search/search'
import { Suspense } from 'react'
import SearchResult from '@/components/search/search-result'

export default async function SearchResultsPage(props: {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1

  return (
    <main>
      <Search placeholder="Search recipes..." />
      <div className="grid gap-10 justify-center mt-10 mx-3 sm:mx-10 xl:mx-20">
        <Suspense key={query + currentPage} fallback={<LoadingSpinner />}>
          <SearchResult query={query} currentPage={currentPage} />
        </Suspense>
      </div>
    </main>
  )
}
