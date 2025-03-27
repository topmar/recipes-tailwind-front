'use client'

import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const LoginButton = () => {
  const { data: session } = useSession()
  const pathname = usePathname()

  const handleLogin = () => {
    sessionStorage.setItem('lastPage', pathname)
  }

  // Function to extract initials
  const getInitials = (name: string | null | undefined) => {
    if (!name) return '??'
    const words = name.trim().split(' ')
    return words.length > 1
      ? `${words[0][0]}${words[1][0]}`.toUpperCase()
      : words[0][0].toUpperCase()
  }

  return session ? (
    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-2 md:space-y-0">
      <Avatar className="size-12 text-xl border-1 border-orange-700">
        <AvatarImage
          src={session.user?.image || ''}
          alt={session.user?.name || 'User'}
        />
        <AvatarFallback className="bg-orange-500">
          {getInitials(session.user?.name)}
        </AvatarFallback>
      </Avatar>
      <Button variant="outline" onClick={() => signOut({ callbackUrl: '/' })}>
        Log out
      </Button>
    </div>
  ) : (
    <div className="flex flex-col items-center space-y-2">
      <Link
        href="/login"
        aria-label="Log in"
        className="hover:text-white"
        onClick={handleLogin}
      >
        <Button variant="outline" className="w-full">
          Log in
        </Button>
      </Link>
    </div>
  )
}

export default LoginButton
