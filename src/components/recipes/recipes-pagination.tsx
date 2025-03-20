import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink
} from '@/components/ui/pagination'
const RecipesPagination = ({
  currentPage,
  totalPages,
  createPageLink
}: {
  currentPage: number
  totalPages: number
  createPageLink: (page: number) => string
}) => {
  return (
    <Pagination className="my-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageLink(Math.max(currentPage - 1, 1))}
            aria-disabled={currentPage === 1}
            className={
              currentPage === 1 ? 'pointer-events-none opacity-50' : ''
            }
          />
        </PaginationItem>

        {[...Array(totalPages)].map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href={createPageLink(i + 1)}
              isActive={currentPage === i + 1}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href={createPageLink(Math.min(currentPage + 1, totalPages))}
            aria-disabled={currentPage === totalPages}
            className={
              currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default RecipesPagination
