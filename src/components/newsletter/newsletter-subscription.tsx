import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, X } from "lucide-react"

export function NewsletterForm({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) {
      setMessage("Please enter a valid email address.")
      return
    }

    setLoading(true)
    setMessage("")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()
      if (response.ok) {
        setMessage("Subscribed successfully! Check your inbox.")
        setEmail("")
      } else {
        setMessage(data.error || "Failed to subscribe.")
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
      <CardContent className="bg-white max-w-md w-full p-6 shadow-lg rounded-2xl relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
          <X size={20} />
        </button>
        <div className="flex items-center space-x-2 mb-4">
          <Mail className="text-blue-500" size={24} />
          <h2 className="text-xl font-semibold">Subscribe to our Newsletter</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
          {message && <p className="mt-2 text-center text-sm text-gray-600">{message}</p>}
        </form>
      </CardContent>
    </Card>
  )
}

export default NewsletterForm
