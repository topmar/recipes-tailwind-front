'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel
} from '@/components/ui/select'
import { ArrowDownAZ, ArrowUpAZ } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

const SortDropdown = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleChange = (order: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('sortBy', 'name')
    params.set('order', order)

    // reset to page 1 if we change the order
    params.set('page', '1')

    router.push(`/recipes?${params.toString()}`)
  }
  return (
    <>
      <Select onValueChange={(value) => handleChange(value)} value="">
        <SelectTrigger className="w-28">
          <SelectValue placeholder="Order by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Name</SelectLabel>
            <SelectItem value="asc">
              <ArrowDownAZ className="text-center" />
            </SelectItem>
            <SelectItem value="desc">
              <ArrowUpAZ />
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}

export default SortDropdown
