import { NextResponse } from "next/server"
import { dbClient } from "@/util/dbClient"

export async function POST(req: Request) {
  const username = req.headers.get("username")
  const email = req.headers.get("email")
  const password = req.headers.get("password")

  // Return failure if not all data is provided
  if (!(username && email && password)) {
    return NextResponse.json({}, { status: 400, statusText: "API POST failure. Some data was missing." })
  }

  // Try to post a new user to the database
  try {
    const client = await dbClient()
    const users = client.collection("users");
    const usernameMatch = await users.findOne({ username })
    // If the username is already in use, return an error
    if (usernameMatch) {
      return NextResponse.json({}, { status: 400, statusText: "Username already in use" })
      // return NextResponse.json(Error("Username already in use"), { status: 400 })
    }
    // If the email is already in use, return an error
    const emailMatch = await users.findOne({ email })
    if (emailMatch) {
      return NextResponse.json({}, { status: 400, statusText: "Email already in use" })
    }
    // Otherwise, post the new user to the database
    await users.insertOne({ username, email, password, created: new Date(), policyAccept: true })
  } catch (err) {
    // If something goes wrong during database communications, return the error
    return NextResponse.json({}, { status: 500, statusText: JSON.stringify(err) })
  }

  return NextResponse.json({})
}