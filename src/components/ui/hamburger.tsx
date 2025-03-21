'use client'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <div
        className="absolute top-5 left-5 flex flex-col justify-between w-8 h-6 cursor-pointer select-none"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen ? 'true' : 'false'}
        aria-controls="mobile-menu"
      >
        <div
          className={cn(
            'w-full h-1 bg-gray-800 rounded transition-transform',
            isMenuOpen ? 'transform rotate-45 translate-y-2' : ''
          )}
        ></div>
        <div
          className={cn(
            'w-full h-1 bg-gray-800 rounded transition-opacity',
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          )}
        ></div>
        <div
          className={cn(
            'w-full h-1 bg-gray-800 rounded transition-transform',
            isMenuOpen ? 'transform -rotate-45 -translate-y-3' : ''
          )}
        ></div>
      </div>
      <div
        className={cn(
          'absolute top-17 left-0 w-40  shadow-lg p-5 flex flex-col items-center space-y-4 transform transition-transform z-50 bg-orange-50',
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <Link
          href="/"
          className="text-2xl font-semibold "
          onClick={closeMenu}
          aria-label="Go to home page"
        >
          Home
        </Link>
        <Link
          href="/recipes"
          className="text-2xl font-semibold"
          onClick={closeMenu}
          aria-label="View all recipes"
        >
          Recipes
        </Link>
        <Separator />
        <Link
          href="/login"
          className="text-xl"
          aria-label="Log in to your account"
        >
          Log in
        </Link>
      </div>
    </>
  )
}

export default HamburgerMenu
