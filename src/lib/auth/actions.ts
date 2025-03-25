const API_AUTHENTICATE_URL = 'https://dummyjson.com/auth/login'

export const authenticateUser = async (username: string, password: string) => {
  try {
    const response = await fetch(API_AUTHENTICATE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })

    if (!response.ok) {
      throw new Error('Authentication failed: Invalid credentials')
    }

    const data = await response.json()
    return data // Contains token, user info, etc.
  } catch (error) {
    console.error('Error during authentication:', error)
    return null
  }
}
