import NextAuth, { User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'

export const BASE_PATH = '/api/auth'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials): Promise<User | null> {
        const users = [
          {
            id: 'test-user-1',
            userName: 'test1',
            name: 'Test 1',
            password: 'pass',
            email: 'test1@donotreply.com'
          },
          {
            id: 'test-user-2',
            userName: 'test2',
            name: 'Test 2',
            password: 'pass',
            email: 'test2@donotreply.com'
          }
        ]
        const user = users.find(
          (user) =>
            user.userName === credentials.username &&
            user.password === credentials.password
        )
        return user ? { id: user.id, name: user.name, email: user.email } : null
      }
    }),
    GitHub
  ],
  basePath: BASE_PATH,
  secret: process.env.SECRET,
  pages: {
    signIn: '/login',
  }
})
