import { NextResponse } from "next/server"
import { dbClient } from "@/util/dbClient"

export async function POST(req: Request) {
  const username = req.headers.get("username")
  const email = req.headers.get("email")
  const password = req.headers.get("password")

  // Return failure if not all data is provided
  if (!(username && email && password)) {
    return NextResponse.json({ message: "Missing data to create new user" }, { status: 400 })
  }

  // Try to post a new user to the database
  try {
    const client = await dbClient()
    const users = client.collection("users");
    const usernameMatch = await users.findOne({ username })
    // If the username is already in use, return an error
    if (usernameMatch) {
      return NextResponse.json({ message: "Username already in use" }, { status: 400 })
    }
    // If the email is already in use, return an error
    const emailMatch = await users.findOne({ email })
    if (emailMatch) {
      return NextResponse.json({ message: "Email already in use" }, { status: 400 })
    }
    // Otherwise, post the new user to the database
    await users.insertOne({ username, email, password, created: new Date(), policyAccept: true })
  } catch (err) {
    // If something goes wrong during database communications, return the error
    return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 })
  }

  return NextResponse.json({})
}