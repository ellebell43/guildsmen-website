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

export async function GET(req: NextRequest) {
  const client = await dbClient()
  const collection = client.collection("templates")

  // Check for templates created from a specific character
  if (req.headers.get("reference")) {
    //@ts-expect-error
    let id = new ObjectId(req.headers.get("reference"))
    const result = await collection.findOne({ reference: id })
    if (!result) return NextResponse.json({ template: false })
    return NextResponse.json({ template: true })
  }
}