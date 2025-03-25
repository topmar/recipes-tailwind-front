import NextAuth, { User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'
import { authenticateUser } from './actions'

export const BASE_PATH = '/api/auth'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Missing username or password')
        }
        const { username, password } = credentials as {
          username: string
          password: string
        }
        try {
          const user = await authenticateUser(username, password)
          console.log(user)

          if (!user) {
            throw new Error('Invalid credentials')
          }

          return {
            id: String(user.id),
            name: `${user.username} ${user.lastName}`,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            image: user.image
          }
        } catch (error) {
          console.error('Authentication error:', error)
          return null
        }
      }
    }),
    GitHub
  ],
  basePath: BASE_PATH,
  secret: process.env.SECRET,
  pages: {
    signIn: '/login'
  },
  // callbacks: {
  //   session({ session, user }) {
  //     return {
  //       ...session,
  //       user: {
  //         ...session.user,
  //         // id: user.id,
  //         // name: user.name,
  //         // email: user.email,
  //         firstName: user.firstName,
  //         lastName: user.lastName,
  //         image: user.image
  //       }
  //     }

      // if (user) {
      //   session.user.image = user.image as string
      //   session.user.id = user.id as string
      //   session.user.name = user.name as string
      //   session.user.firstName = user.firstName as string
      //   session.user.lastName = user.lastName as string
      // }
      // return session
    // }
  // }
})
