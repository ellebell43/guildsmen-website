import { dbClient } from "@/util/dbClient"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  let res = { success: true, message: "New character created successfully" }
  let char = req.headers.get("char")
  if (!char) {
    res.success = false
    res.message = "No character data provided."
    return NextResponse.json(res)
  }
  const client = await dbClient()
  const characters = client.collection("characters")
  let character = JSON.parse(char)
  character._id = new ObjectId(character._id)
  const result = await characters.insertOne(character)
  if (!result.insertedId) {
    res.success = false
    res.message = "Failed to insert a new document to the database. Please contact us via Discord."
    return NextResponse.json(res)
  }
  return NextResponse.json(res)
}