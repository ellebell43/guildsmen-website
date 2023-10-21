import { dbClient } from "@/util/dbClient";
import { cookies } from "next/dist/client/components/headers"
import { NextResponse } from "next/server";
import { Document } from "mongodb";

export async function GET(req: Request) {
  type apiRes = { success: boolean, message: string, list?: Document[] }

  const token = cookies().get("token")?.value // Get user token from cookies for use in finding username of user
  if (!token) {
    let res: apiRes = { success: false, message: "No token provided. Please sign in and retry." }
    return NextResponse.json(res)
  }

  const client = await dbClient()
  const users = client.collection("users")
  let user = await users.findOne({ token })
  if (!user) {
    let res: apiRes = { success: false, message: "Invalid token provided. Please re-sign in and retry." }
    return NextResponse.json(res)
  }

  const characters = client.collection("characters")
  let characterList = await characters.find({ owner: user.username }).project({ name: 1, demeanor: 1, physique: 1, species: 1, dateCreated: 1 }).toArray()
  let res: apiRes = { success: true, message: "User list retrieved successfully.", list: characterList }
  return NextResponse.json(res)
}