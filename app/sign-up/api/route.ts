import { NextResponse } from "next/server"
import { dbClient } from "@/util/dbClient"

export async function POST(req: Request) {
  const username = req.headers.get("username")
  const email = req.headers.get("email")
  const password = req.headers.get("password")

  let data = { success: true, message: "API POST success!" }

  // Return failure if not all data is provided
  if (!(username && email && password)) {
    data.success = false
    data.message = "API POST failure. Some data was missing"
    return NextResponse.json(data)
  }

  // Try to post a new user to the database
  try {
    const client = await dbClient()
    const users = client.collection("users");
    const usernameMatch = await users.findOne({ username })
    // If the username is already in use, return an error
    if (usernameMatch) {
      data.success = false
      data.message = "Username already in use"
      return NextResponse.json(data)
    }
    // If the email is already in use, return an error
    const emailMatch = await users.findOne({ email })
    if (emailMatch) {
      data.success = false
      data.message = "Email already in use"
      return NextResponse.json(data)
    }
    // Otherwise, post the new user to the database
    await users.insertOne({ username, email, password, created: new Date(), policyAccept: true })
  } catch (err) {
    // If something goes wrong during database communications, return the error
    data.success = false
    data.message = String(err)
  }

  return NextResponse.json(data)
}