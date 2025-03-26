import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      firstName: string
      lastName: string
    } & DefaultSession['user']
  }

  interface User extends NextAuthUser {
    firstName: string
    lastName: string
  }
}
