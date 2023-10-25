import { dbClient } from "@/util/dbClient"
import { ObjectId, WithId, Document } from "mongodb"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  type apiRes = { success: boolean, message: string, character?: WithId<Document> }

  const id = req.headers.get("id")
  if (!id) {
    const res: apiRes = { success: false, message: "No character id provided." }
    return NextResponse.json(res)
  }

  const client = await dbClient()
  const characters = client.collection("characters")
  const character = await characters.findOne({ _id: new ObjectId(id) })
  if (!character) {
    const res: apiRes = { success: false, message: "No character found with provided id" }
    return NextResponse.json(res)
  }

  const res: apiRes = { success: true, message: "Character found!", character }
  return NextResponse.json(res)
}