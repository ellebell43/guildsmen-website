import { dbClient } from "@/util/dbClient"
import { characterTemplate } from "@/util/types"
import { ObjectId } from "mongodb"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  let data = req.headers.get("template")
  if (!data) {
    return NextResponse.json({ message: "No character template provided." }, { status: 400 })
  }
  const client = await dbClient()
  const templates = client.collection("templates")
  let template: characterTemplate = JSON.parse(data)
  template._id = new ObjectId(template._id)
  template.reference = new ObjectId(template.reference)
  const result = await templates.insertOne(template)
  if (!result.insertedId) {
    return NextResponse.json({ message: "Failed to insert template to database. Please try again." }, { status: 500 })
  }
  return NextResponse.json({ message: "Template created successfully" })

}