import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "parvin.shafiee.m@gmail.com",
        pass: "qqjlhvabrhbyyxkh" // App password (not your real password)
      },
      secure: true // Explicitly enable TLS encryption
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for Subscribing!",
      html: `<h1>Welcome!</h1><p>You've successfully subscribed to our newsletter.</p>`
    })
    
    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending email:", error.message)  // Access the 'message' property of the error
    } else {
      console.error("Error sending email: An unknown error occurred.")
    }
  
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }   
}