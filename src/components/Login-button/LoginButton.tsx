'use client'

import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LoginButton = () => {
  const { data: session } = useSession()
  const pathname = usePathname()
  
  const handleLogin = () => {
    sessionStorage.setItem('lastPage', pathname)
  }

  return session ? (
    <div className="flex flex-col items-center space-y-2">
      <span className="text-lg font-semibold">
        User: {session.user?.name}
      </span>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Log out
      </Button>
    </div>
  ) : (
    <div className="flex flex-col items-center space-y-2">
      <Link href="/login" aria-label="Log in" className="hover:text-white" onClick={handleLogin}>
        Log in
      </Link>
    </div>
  )
}

export default LoginButton
