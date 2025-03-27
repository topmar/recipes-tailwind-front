'use client'

import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenu from '../ui/hamburger'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import LoginButton from '../Login-button/LoginButton'

const NavBar = () => {
  const pathname = usePathname()
  const { data: session } = useSession()

  return (
    <nav
      className="bg-orange-400 p-2 xl:px-8 border-b-2 border-b-orange-500 dark:bg-orange-700 dark:border-b-orange-800"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex justify-between items-end">
        {/* mobile */}
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
        <Link href="/" aria-label="Home page">
          <Image
            src="/awesome-recipes-logo.svg"
            alt="logo"
            width={0}
            height={0}
            className="w-20 min-[768px]:w-40"
          />
        </Link>
        {/* menu for desktop */}
        <ul className="hidden md:flex space-x-4 gap-0">
          <li>
            <Link
              href="/"
              aria-label="Go to home page"
              className={`text-2xl px-4 pb-2.5 pt-4 hover:bg-orange-500 dark:hover:bg-orange-800 rounded-t-lg ${
                pathname === '/' ? 'bg-orange-500 dark:bg-orange-800' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/recipes"
              aria-label="View all recipes"
              className={`text-2xl px-4 pb-2.5 pt-4 hover:bg-orange-500 dark:hover:bg-orange-800 rounded-t-lg ${
                pathname.includes('/recipes')
                  ? 'bg-orange-500 dark:bg-orange-800'
                  : ''
              }`}
            >
              Recipes
            </Link>
          </li>
        </ul>
        <div className="hidden md:block self-center">
          <LoginButton />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
