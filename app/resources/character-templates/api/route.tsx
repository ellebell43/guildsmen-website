import { dbClient } from "@/util/dbClient"
import { characterTemplate } from "@/util/types"
import { ObjectId } from "mongodb"
import { NextRequest, NextResponse } from "next/server"

// ========== POST ==========

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

// ========== GET ==========

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

  // Get template from DB
  const id = req.headers.get("id")
  if (!id) {
    return NextResponse.json({ message: "No template id provided" }, { status: 400 })
  }
  const templates = client.collection("templates")
  const template = await templates.findOne({ _id: new ObjectId(id) })
  if (!template) {
    return NextResponse.json({ message: "No template found with provided id" }, { status: 404 })
  }

  // Check if user owns template, otherwise return template and isOwner == false
  // No token == isOwner = false
  let token: string | null | undefined = req.cookies.get("token")?.value
  if (!token) token = req.headers.get("token")
  if (!token) return NextResponse.json({ template, isOwner: template.owner == false })
  // user.username != template.owner ? isOwner = false
  const users = client.collection("users")
  const user = await users.findOne({ token })
  if (!user) return NextResponse.json({ message: "No user found with provided token. Please sign in and try again." }, { status: 404 })

  return NextResponse.json({ template, isOwner: template.owner == user.username })
}

// ========== PATCH ==========

export async function PATCH(req: NextRequest) {
  const header = req.headers.get("templateToUpdate")
  let template: characterTemplate | undefined
  if (header) template = JSON.parse(header)
  if (!template) return NextResponse.json({ message: "no template provided" }, { status: 400 })

  let token: string | null | undefined = req.cookies.get("token")?.value
  if (!token) token = req.headers.get("token")
  if (!token) {
    return NextResponse.json({ message: "No user token provided. Please sign in and try again." }, { status: 400 })
  }

  const client = await dbClient()
  const users = client.collection("users")
  const user = await users.findOne({ token })
  if (!user) {
    return NextResponse.json({ message: "No user found with provided token. Please sign in and try again" }, { status: 404 })
  }

  if (user.username != template.owner) return NextResponse.json({ message: "You do not have permission to make changes to this character" }, { status: 400 })

  const updateObject = { "$set": { character: template.character } }

  const collection = client.collection("templates")
  const updateResult = await collection.updateOne({ _id: new ObjectId(template._id) }, updateObject)

  if (!updateResult.matchedCount) {
    return NextResponse.json({ message: "No character found with provided id. Character update failed" }, { status: 404 })
  }

  return NextResponse.json({ message: "Character updated successfully" })
}