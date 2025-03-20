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
import { ArrowDownAZ, ArrowUpAZ, RotateCcw } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

const SortDropdown = () => {
  const [selectKey, setSelectKey] = useState(Date.now())
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleChange = (order: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('sortBy', 'name')
    params.set('order', order)

    // reset to default order
    if (order === 'none') {
      params.delete('sortBy')
      params.delete('order')
      // the shadcn Select has no native reset, so this is a really janky way of forcing a rerender
      // so that when reset is clicked, the value is changed to "" and the placeholder shows again, instead of the last selected item
      setSelectKey(Date.now())
    }

    // reset to page 1 if we change the order
    params.set('page', '1')

    router.push(`/recipes?${params.toString()}`)
  }
  return (
    <>
      <Select key={selectKey} onValueChange={(value) => handleChange(value)}>
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
          <SelectGroup>
            <SelectLabel>Reset</SelectLabel>
            <SelectItem value={'none'}>
              <RotateCcw />
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}

export default SortDropdown
