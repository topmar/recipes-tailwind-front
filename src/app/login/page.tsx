'use client'

import { Button } from '@/components/ui/button'
import { DialogFooter, DialogHeader } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@radix-ui/react-dialog'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [open, setOpen] = useState(true)
  const router = useRouter()

  const [callbackUrl, setCallbackUrl] = useState('/')

  useEffect(() => {
    const storedCallbackUrl = sessionStorage.getItem('lastPage')
    if (storedCallbackUrl) {
      setCallbackUrl(storedCallbackUrl)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await signIn('credentials', {
      redirect: false,
      username,
      password
    })

    if (res?.error) {
      setError('Invalid credentials')
    } else {
      router.push(callbackUrl)
    }
  }

  return (
    <div className="max-w-sm mx-auto p-4 bg-orange-500 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="username" className="text-white">
            Username
          </Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="password" className="text-white">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-orange-700 hover:bg-orange-600 text-white"
        >
          Login
        </Button>
      </form>
    </div>
  )
}
