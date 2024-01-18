import { dbClient } from "@/util/dbClient";
import { cookies } from "next/dist/client/components/headers"
import { NextRequest, NextResponse } from "next/server";
import { Document, ObjectId } from "mongodb";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")
  if (!token) {
    return NextResponse.json({ message: "No user token provided" }, { status: 400 })
  }

  const client = await dbClient()
  const users = client.collection("users")
  let user = await users.findOne({ token })
  if (!user) {
    return NextResponse.json({ message: "No user found with provided token" }, { status: 404 })
  }

  const characters = client.collection("characters")
  let characterList = await characters.find({ owner: user.username }).project({ name: 1, demeanor: 1, physique: 1, species: 1, dateCreated: 1, guild: 1 }).toArray()
  return NextResponse.json(characterList)
}

export async function DELETE(req: Request) {
  type apiRes = { success: boolean, message: string }

  const token = cookies().get("token")?.value // Get user token from cookies for use in finding username of user
  if (!token) {
    return NextResponse.json({ message: "No user token provided" }, { status: 400 })
  }

  let deleteId = req.headers.get("id")
  if (!deleteId) {
    return NextResponse.json({ message: "No character id provided" }, { status: 400 })
  }

  let client = await dbClient()

  let users = client.collection("users")
  let user = await users.findOne({ token })
  if (!user) {
    return NextResponse.json({ message: "No user found with provided token" }, { status: 404 })
  }

  let characters = client.collection("characters")
  let result = await characters.deleteOne({ _id: new ObjectId(deleteId), owner: user.username })
  if (result.deletedCount == 0) {
    return NextResponse.json({ message: "No character found matching user's username and provided id" }, { status: 404 })
  }

  return NextResponse.json({})
}