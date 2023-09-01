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
    console.log(data)
    return NextResponse.json(data)
  }

  // Try to post a new user to the database
  try {
    const client = await dbClient()
    const users = client.collection("users");
    users.insertOne({ username, email, password, created: new Date() })
  } catch (err) {
    data.success = false
    data.message = String(err)
  }

  console.log(data)

  return NextResponse.json(data)
}