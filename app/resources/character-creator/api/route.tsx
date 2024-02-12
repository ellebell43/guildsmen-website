import { dbClient } from "@/util/dbClient"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  let char = req.headers.get("char")
  if (!char) {
    return NextResponse.json({ message: "No character data provided." }, { status: 400 })
  }
  const client = await dbClient()
  const characters = client.collection("characters")
  let character = JSON.parse(char)
  character._id = new ObjectId(character._id)
  const result = await characters.insertOne(character)
  if (!result.insertedId) {
    return NextResponse.json({ message: "Failed to insert character to the database. Please try again" }, { status: 500 })
  }
  return NextResponse.json({ message: "Character created successfully" })
}