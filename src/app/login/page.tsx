'use client'

import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogDescription } from '@radix-ui/react-dialog'
import { signIn } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

export default function LoginForm() {
  const [open, setOpen] = React.useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [callbackUrl, setCallbackUrl] = useState('/')

  useEffect(() => {
    const mainElement = document.querySelector('main')
    if (mainElement) {
      if (open) {
        mainElement.setAttribute('inert', 'true')
      } else {
        mainElement.removeAttribute('inert')
      }
    }

    if (typeof window !== 'undefined') {
      const storedCallbackUrl = sessionStorage.getItem('lastPage')
      if (storedCallbackUrl) {
        setCallbackUrl(storedCallbackUrl)
      }
    }
  }, [open])

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
      window.location.href = callbackUrl
    }
  }

  const closeModal = (what: boolean) => {
    setOpen(what)

    if (!what) {
      window.location.href = callbackUrl
    }
  }

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogOverlay className="bg-orange-900/100" />
      <DialogContent
        className="sm:max-w-[25rem]"
        onInteractOutside={(e) => {
          e.preventDefault()
        }}
      >
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Log in to save your favorite recipes.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="username" className="mb-1">
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

          {/* Password */}
          <div className="mb-4">
            <Label htmlFor="password" className="mb-1">
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
          {error && (
            <p className="text-red-600 text-sm mt-2 text-center mb-2">{error}</p>
          )}
          <Button
            type="submit"
            className="w-full bg-orange-700 hover:bg-orange-600 text-white py-2 rounded-md"
          >
            Log in
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
