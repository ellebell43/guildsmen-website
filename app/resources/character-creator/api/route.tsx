import { dbClient } from "@/util/dbClient"
import { Character, user } from "@/util/types"
import { ObjectId } from "mongodb"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const fromTemplate = req.headers.get("fromTemplate")
  // Check for character in header
  let char = req.headers.get("char")
  if (!char) {
    return NextResponse.json({ message: "No character data provided." }, { status: 400 })
  }

  const client = await dbClient()

  // If from template, get username to update owner
  let newOwner = ""
  let newDate = new Date()
  if (fromTemplate) {
    const token = req.headers.get("token")
    if (!token) return NextResponse.json({ message: "No token provided" }, { status: 400 })
    let collection = client.collection("users")
    let user = await collection.findOne({ token })
    if (!user) return NextResponse.json({ message: "No user found with provided token" }, { status: 404 })
    newOwner = user.username
  }

  const characters = client.collection("characters")
  let character: Character = JSON.parse(char)
  // Create template reference properties if from template before adjusting id and owner
  if (fromTemplate) {
    character.refOwner = character.owner
    character.templateRef = new ObjectId(character._id)
  }
  character._id = new ObjectId(character._id)
  // Update owner, date created, and id if from template
  if (fromTemplate) {
    character.owner = newOwner
    character.dateCreated = newDate
    character._id = new ObjectId()
  }
  const result = await characters.insertOne(character)
  if (!result.insertedId) {
    return NextResponse.json({ message: "Failed to insert character to the database. Please try again" }, { status: 500 })
  }
  return NextResponse.json({ message: "Character created successfully" })
}